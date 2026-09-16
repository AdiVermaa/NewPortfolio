import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { setAllTimeline } from "../utils/GsapScroll";

/**
 * Custom animated Three.js hero scene:
 * - Central glowing orb with iridescent surface shader
 * - Particle system orbiting the orb (1200 points)
 * - Responds to mouse movement (orb tilts, particles shift)
 * - Blends into the dark background with a fog gradient
 */
const Scene = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    if (!canvasRef.current) return;

    // -- Setup --
    const container = canvasRef.current;
    const rect = container.getBoundingClientRect();
    const W = rect.width || window.innerWidth;
    const H = rect.height || window.innerHeight;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 5);

    // -- Orb geometry with custom shader --
    const orbGeo = new THREE.IcosahedronGeometry(1.4, 12);
    const orbMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColor1: { value: new THREE.Color("#b084ff") },  // accent violet
        uColor2: { value: new THREE.Color("#5b21b6") },  // deep purple
        uColor3: { value: new THREE.Color("#1e0a3c") },  // darkest
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec3 vNormal;
        varying vec3 vPosition;

        // Simplex-inspired noise
        vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          vec3 i = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - 0.5;
          i = mod289(i);
          vec4 p = permute(permute(permute(
              i.z + vec4(0.0,i1.z,i2.z,1.0))
            + i.y + vec4(0.0,i1.y,i2.y,1.0))
            + i.x + vec4(0.0,i1.x,i2.x,1.0));
          vec3 ns = 0.142857 * floor(p * 0.0243902) - 0.285714;
          vec4 j = p - 49.0*floor(p*0.02040816);
          vec4 x_ = floor(j*0.111111);
          vec4 y_ = j - 9.0*x_;
          vec4 x = (x_*2.0+0.5)/9.0 - 1.0;
          vec4 y = (y_*2.0+0.5)/9.0 - 1.0;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);
          vec4 norm = inversesqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
        }

        void main() {
          vNormal = normal;
          vPosition = position;
          float n = snoise(normal * 1.8 + uTime * 0.18);
          float mouseInfluence = dot(normal.xy, uMouse) * 0.12;
          vec3 displaced = position + normal * (n * 0.22 + mouseInfluence);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vec3 light = normalize(vec3(1.0, 1.0, 2.0));
          float diff = max(dot(vNormal, light), 0.0);
          float fresnel = pow(1.0 - max(dot(vNormal, vec3(0,0,1)), 0.0), 3.0);
          float pulse = sin(uTime * 0.7) * 0.5 + 0.5;

          vec3 col = mix(uColor3, uColor2, diff);
          col = mix(col, uColor1, fresnel * (0.7 + 0.3 * pulse));
          col += uColor1 * 0.15 * pulse;

          // rim glow
          float rim = 1.0 - max(dot(vNormal, vec3(0,0,1)), 0.0);
          rim = pow(rim, 2.5);
          col += rim * uColor1 * 0.4;

          gl_FragColor = vec4(col, 0.92);
        }
      `,
      transparent: true,
    });
    const orb = new THREE.Mesh(orbGeo, orbMat);
    scene.add(orb);

    // -- Particle system around the orb --
    const COUNT = 1200;
    const positions = new Float32Array(COUNT * 3);
    const radii = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      const r = 1.9 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      radii[i] = r;
    }
    const partGeo = new THREE.BufferGeometry();
    partGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0xb084ff,
      size: 0.025,
      transparent: true,
      opacity: 0.65,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    // -- Lighting --
    const ambLight = new THREE.AmbientLight(0x2d1b69, 1.5);
    scene.add(ambLight);
    const pointLight1 = new THREE.PointLight(0xb084ff, 3, 8);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0x5b21b6, 2, 6);
    pointLight2.position.set(-3, -2, -2);
    scene.add(pointLight2);

    // -- Mouse tracking --
    let mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    document.addEventListener("mousemove", onMouseMove);

    // -- Resize --
    const onResize = () => {
      const rect = container.getBoundingClientRect();
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
      renderer.setSize(rect.width, rect.height);
    };
    window.addEventListener("resize", onResize);

    // -- Animation loop --
    const clock = new THREE.Clock();
    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      orbMat.uniforms.uTime.value = t;
      orbMat.uniforms.uMouse.value.set(mouse.x, mouse.y);
      orb.rotation.y = t * 0.08;
      orb.rotation.x = mouse.y * 0.12;
      particles.rotation.y = t * 0.04;
      particles.rotation.x = mouse.y * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    // -- Signal loading complete (same timing as original) --
    const progress = setProgress(setLoading);
    const loaded = setTimeout(() => {
      progress.loaded().then(() => {
        setAllTimeline();
      });
    }, 1200);

    return () => {
      clearTimeout(loaded);
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      scene.clear();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [setLoading]);

  return (
    <div className="character-container">
      <div className="character-model spline-model" ref={canvasRef}>
        <div className="character-rim" />
        <div className="spline-bottom-fade" />
      </div>
    </div>
  );
};

export default Scene;
