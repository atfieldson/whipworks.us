import React, { Component } from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbit-controls';

import './DesignABullwhip.css';

class THREEJSRenderer extends Component {

    constructor(props) {
        super(props)

        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.animate = this.animate.bind(this)
    }

    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            35,
            width / height,
            2,
            1000
        )
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const geometry = new THREE.BoxGeometry(10, 10, 10)
        const material = new THREE.MeshPhongMaterial({ color: '#433F81' })
        const cube = new THREE.Mesh(geometry, material)

        //lights
        const light = new THREE.AmbientLight(0xffffff, .3);
        scene.add(light);

        const light1 = new THREE.PointLight(0xffffff, .6);
        light1.position.set(-50, -15, 15)
        scene.add(light1);

        const light2 = new THREE.PointLight(0xffffff, .6);
        light2.position.set(50, 15, 15)
        scene.add(light2);
        //end lights

        //backgrounds
        const WWLogo = new THREE.TextureLoader().load(require("./images/backgrounds/ww.jpg"));
        const geo0WW = new THREE.PlaneBufferGeometry(50, 50, 8, 8);
        const mat0WW = new THREE.MeshPhongMaterial({ color: 0xffffff, map: WWLogo });
        const plane0 = new THREE.Mesh(geo0WW, mat0WW);
        plane0.position.set(0, 0, -60)
        plane0.rotation.y = 0;

        const Indy = new THREE.TextureLoader().load(require("./images/backgrounds/catWhip.jpg"));
        const geo1WW = new THREE.PlaneBufferGeometry(50, 50, 8, 8);
        const mat1WW = new THREE.MeshPhongMaterial({ color: 0xffffff, map: Indy });
        const plane1 = new THREE.Mesh(geo1WW, mat1WW);
        plane1.position.set(60, 0, 0)
        plane1.rotation.y = -Math.PI / 2;

        const CatWhip = new THREE.TextureLoader().load(require("./images/backgrounds/saberWhip.jpg"));
        const geo2WW = new THREE.PlaneBufferGeometry(50, 50, 8, 8);
        const mat2WW = new THREE.MeshPhongMaterial({ color: 0xffffff, map: CatWhip });
        const plane2 = new THREE.Mesh(geo2WW, mat2WW);
        plane2.position.set(-60, 0, 0)
        plane2.rotation.y = Math.PI / 2;

        const SaberWhip = new THREE.TextureLoader().load(require("./images/backgrounds/indy.jpg"));
        const geo3WW = new THREE.PlaneBufferGeometry(50, 50, 8, 8);
        const mat3WW = new THREE.MeshPhongMaterial({ color: 0xffffff, map: SaberWhip });
        const plane3 = new THREE.Mesh(geo3WW, mat3WW);
        plane3.position.set(0, 0, 60)
        plane3.rotation.y = Math.PI;

        scene.add(plane0, plane1, plane2, plane3);
        //end backgrounds

        //handle
        // const handleCanvas = this.props.materialCanvas;

        // const texture = new THREE.CanvasTexture(handleCanvas); //document.getElementById('materialCanvas')

        const geometry1 = new THREE.CylinderGeometry(4, 4, 80, 16);
        const material1 = new THREE.MeshPhongMaterial({ color: 0xffffff}); //, map: texture, bumpMap : texture
        const handle = new THREE.Mesh(geometry1, material1);
        handle.rotation.y = Math.PI;
        //end handle

        camera.position.set(0, 0, 100)
        scene.add(cube)
        scene.add(handle);
        renderer.setClearColor('#000000')
        renderer.setSize(width, height)

        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.material = material
        this.cube = cube
        this.handle = handle
        this.mount.appendChild(this.renderer.domElement)
        this.start()
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop() {
        cancelAnimationFrame(this.frameId)
    }

    animate() {
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01

        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }


    render() {
        return (
            <div>
                <div ref={(mount) => { this.mount = mount }} className="myCanvas" width="500" height="1000" ></div>
            </div>
        )
    }
}

// React.render(<THREEJSRenderer />, document.getElementById('root'))

// this allows us to use <App /> in index.js
export default THREEJSRenderer;