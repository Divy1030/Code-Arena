// import React, { useEffect, useRef } from 'react';

// const Login = () => {

//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const container = document.querySelector('.canvas-container');
//         const c = canvas.getContext('2d');
//         var mouse = {
//             x: undefined,
//             y: undefined
//         };
//         window.addEventListener('mousemove', function (e) {
//             console.log(e);
//             mouse.x = e.x;
//             mouse.y = e.y;
//             console.log(mouse);


//         });

//         canvas.width = container.offsetWidth;
//         canvas.height = container.offsetHeight;

//         const img = new Image();
//         img.src = 'https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1024x768&vertical=center';

//         const largeCircle = {
//             // x: canvas.width / 2,
//             x: 295,
//             // y: canvas.height / 2,
//             y: 230,
//             radius: 7,
//         };

//         const smallCircle = {
//             x: largeCircle.x,
//             y: largeCircle.y,
//             radius: 4,
//         };

//         function drawScene() {
//             c.clearRect(0, 0, canvas.width, canvas.height);
//             c.drawImage(img, 0, -90, canvas.width, canvas.height);

//             const rectX = 230;
//             const rectY = 195;
//             const rectWidth = 70;
//             const rectHeight = 60;

//             c.beginPath();
//             c.rect(rectX, rectY, rectWidth, rectHeight);
//             c.strokeStyle = 'transparent';
//             c.stroke();

//             c.beginPath();
//             // c.arc(largeCircle.x, largeCircle.y, largeCircle.radius, 0, Math.PI * 2, false);
//             c.ellipse(largeCircle.x, largeCircle.y, largeCircle.radius , largeCircle.radius * 1.5, 0, 0, Math.PI * 2);
//             c.strokeStyle = 'white';
//             c.fillStyle = 'white';
//             c.fill();
//             c.lineWidth = 2;
//             c.stroke();
//             c.beginPath();
//             // c.arc(smallCircle.x, smallCircle.y, smallCircle.radius, 0, Math.PI * 2, false);
//             c.ellipse(smallCircle.x, smallCircle.y, smallCircle.radius , smallCircle.radius * 1.5, 0, 0, Math.PI * 2);
//             c.fillStyle = 'black';
//             c.fill();
//             c.stroke();
//         }

//         img.onload = function () {
//             drawScene();
//         };

//         window.addEventListener('mousemove', function (e) {
//             let rect = canvas.getBoundingClientRect();
//             let mouseX = e.clientX - rect.left;
//             let mouseY = e.clientY - rect.top;

//             let dx = mouseX - largeCircle.x;
//             let dy = mouseY - largeCircle.y;
//             let distance = Math.sqrt(dx * dx + dy * dy);

//             if (distance + smallCircle.radius < largeCircle.radius) {
//                 smallCircle.x = mouseX;
//                 smallCircle.y = mouseY;
//             } else {
//                 let angle = Math.atan2(dy, dx);
//                 smallCircle.x = largeCircle.x + Math.cos(angle) * (largeCircle.radius - smallCircle.radius);
//                 smallCircle.y = largeCircle.y + Math.sin(angle) * (largeCircle.radius - smallCircle.radius);
//             }

//             drawScene();
//         });

//         window.addEventListener('resize', () => {
//             // canvas.width = canvas.offsetWidth;
//             // canvas.height = canvas.offsetHeight;
//             canvas.width = container.offsetWidth;
//             canvas.height = container.offsetHeight;
//             drawScene();
//         });

//         img.onerror = function () {
//             console.error("Failed to load image");
//         };
//     }, []);

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-900">
//             <div className="flex bg-gray-100 rounded-lg overflow-hidden max-w-4xl shadow-lg w-full">
//                 <div className="w-1/2 bg-gray-200 flex items-center justify-center canvas-container">
//                     {/* <img
//             src="https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1024x768&vertical=center"
//             alt="Illustration"
//             className="max-w-2xl"
//           /> */}
//                     <canvas ref={canvasRef} className="max-w-full"></canvas>
//                 </div>
//                 <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
//                     <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome back!</h1>
//                     <p className="text-gray-600 mb-6">Please enter your details</p>

//                     <label className="text-gray-700 text-sm mb-2" htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
//                         placeholder="Enter your email"
//                     />

//                     <label className="text-gray-700 text-sm mb-2" htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
//                         placeholder="Enter your password"
//                     />

//                     <div className="flex items-center justify-between mb-6">
//                         <div>
//                             <input type="checkbox" id="remember" className="mr-2" />
//                             <label htmlFor="remember" className="text-sm text-gray-600">Remember me for 30 days</label>
//                         </div>
//                         <a href="#" className="text-sm text-gray-700 hover:underline">Forgot password?</a>
//                     </div>

//                     <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 mb-4">
//                         Log in
//                     </button>

//                     <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-bold flex items-center justify-center">
//                         <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" className="w-5 h-5 mr-2" />
//                         Log in with Google
//                     </button>

//                     <p className="text-center text-sm text-gray-600 mt-4">
//                         Don't have an account? <a href="#" className="text-black font-bold hover:underline">Sign Up</a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


// import React, { useEffect, useRef } from 'react';

// const Login = () => {
//     const canvasRef = useRef(null);
//     const animationFrameRef = useRef();
//     const currentPosRef = useRef({ x: 0, y: 0 });
//     const targetPosRef = useRef({ x: 0, y: 0 });

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const container = document.querySelector('.canvas-container');
//         const c = canvas.getContext('2d');

//         canvas.width = container.offsetWidth;
//         canvas.height = container.offsetHeight;

//         const img = new Image();
//         img.src = 'https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1024x768&vertical=center';

//         const largeCircle = {
//             x: 295,
//             y: 230,
//             radius: 7,
//         };

//         const smallCircle = {
//             x: largeCircle.x,
//             y: largeCircle.y,
//             radius: 4,
//         };

//         // Initialize current position
//         currentPosRef.current = { x: smallCircle.x, y: smallCircle.y };
//         targetPosRef.current = { x: smallCircle.x, y: smallCircle.y };

//         function lerp(start, end, factor) {
//             return start + (end - start) * factor;
//         }

//         function updateEyePosition() {
//             // Smooth interpolation between current and target positions
//             const easing = 0.1; // Adjust this value to control movement speed (0.1 = smooth, 0.5 = faster)

//             currentPosRef.current.x = lerp(currentPosRef.current.x, targetPosRef.current.x, easing);
//             currentPosRef.current.y = lerp(currentPosRef.current.y, targetPosRef.current.y, easing);

//             smallCircle.x = currentPosRef.current.x;
//             smallCircle.y = currentPosRef.current.y;

//             drawScene();
//             animationFrameRef.current = requestAnimationFrame(updateEyePosition);
//         }

//         function drawScene() {
//             c.clearRect(0, 0, canvas.width, canvas.height);
//             c.drawImage(img, 0, -90, canvas.width, canvas.height);

//             // Draw outer eye (white part)
//             c.beginPath();
//             c.ellipse(largeCircle.x, largeCircle.y, largeCircle.radius, largeCircle.radius * 1.5, 0, 0, Math.PI * 2);
//             c.fillStyle = 'white';
//             c.fill();
//             c.strokeStyle = 'rgba(0, 0, 0, 0.1)';
//             c.lineWidth = 1;
//             c.stroke();

//             // Draw pupil (black part) with subtle shadow
//             c.beginPath();
//             c.ellipse(smallCircle.x, smallCircle.y, smallCircle.radius, smallCircle.radius * 1.5, 0, 0, Math.PI * 2);
//             c.fillStyle = 'black';
//             c.fill();

//             // Add shine to the eye
//             const shineRadius = smallCircle.radius * 0.4;
//             c.beginPath();
//             c.arc(smallCircle.x + smallCircle.radius * 0.3, 
//                  smallCircle.y - smallCircle.radius * 0.3, 
//                  shineRadius, 0, Math.PI * 2);
//             c.fillStyle = 'rgba(255, 255, 255, 0.8)';
//             c.fill();
//         }

//         function handleMouseMove(e) {
//             let rect = canvas.getBoundingClientRect();
//             let mouseX = e.clientX - rect.left;
//             let mouseY = e.clientY - rect.top;

//             // Calculate angle and distance from the center of the eye
//             let dx = mouseX - largeCircle.x;
//             let dy = mouseY - largeCircle.y;
//             let distance = Math.sqrt(dx * dx + dy * dy);
//             let angle = Math.atan2(dy, dx);

//             // Add subtle random movement
//             const randomOffset = 0.5;
//             const randomX = (Math.random() - 0.5) * randomOffset;
//             const randomY = (Math.random() - 0.5) * randomOffset;

//             // Constrain movement within the eye
//             const maxDistance = largeCircle.radius - smallCircle.radius;
//             const actualDistance = Math.min(distance, maxDistance);

//             // Calculate target position with constrained movement
//             targetPosRef.current = {
//                 x: largeCircle.x + Math.cos(angle) * actualDistance * 0.8 + randomX,
//                 y: largeCircle.y + Math.sin(angle) * actualDistance * 0.8 + randomY
//             };
//         }

//         img.onload = function () {
//             drawScene();
//             updateEyePosition();
//         };

//         window.addEventListener('mousemove', handleMouseMove);
//         window.addEventListener('resize', () => {
//             canvas.width = container.offsetWidth;
//             canvas.height = container.offsetHeight;
//             drawScene();
//         });

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//             if (animationFrameRef.current) {
//                 cancelAnimationFrame(animationFrameRef.current);
//             }
//         };
//     }, []);

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-900">
//             <div className="flex bg-gray-100 rounded-lg overflow-hidden max-w-4xl shadow-lg w-full">
//                 <div className="w-1/2 bg-gray-200 flex items-center justify-center canvas-container">
//                     <canvas ref={canvasRef} className="max-w-full"></canvas>
//                 </div>
//                 {/* Rest of the login form JSX remains the same */}
//                 <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
//                     <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome back!</h1>
//                     <p className="text-gray-600 mb-6">Please enter your details</p>

//                     <label className="text-gray-700 text-sm mb-2" htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
//                         placeholder="Enter your email"
//                     />

//                     <label className="text-gray-700 text-sm mb-2" htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
//                         placeholder="Enter your password"
//                     />

//                     <div className="flex items-center justify-between mb-6">
//                         <div>
//                             <input type="checkbox" id="remember" className="mr-2" />
//                             <label htmlFor="remember" className="text-sm text-gray-600">Remember me for 30 days</label>
//                         </div>
//                         <a href="#" className="text-sm text-gray-700 hover:underline">Forgot password?</a>
//                     </div>

//                     <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 mb-4">
//                         Log in
//                     </button>

//                     <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-bold flex items-center justify-center">
//                         <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" className="w-5 h-5 mr-2" />
//                         Log in with Google
//                     </button>

//                     <p className="text-center text-sm text-gray-600 mt-4">
//                         Don't have an account? <a href="#" className="text-black font-bold hover:underline">Sign Up</a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useEffect, useRef } from 'react';

const Login = () => {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef();
    const currentPosRef = useRef({ leftX: 0, leftY: 0, rightX: 0, rightY: 0 });
    const targetPosRef = useRef({ leftX: 0, leftY: 0, rightX: 0, rightY: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = document.querySelector('.canvas-container');
        const c = canvas.getContext('2d');

        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        const img = new Image();
        img.src = 'https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1024x768&vertical=center';

        // Define both eyes
        const eyes = {
            left: {
                outer: { x: 275, y: 230, radius: 7 },
                inner: { x: 275, y: 230, radius: 4 }
            },
            right: {
                outer: { x: 315, y: 230, radius: 7 },
                inner: { x: 315, y: 230, radius: 4 }
            }
        };

        // Initialize current positions
        currentPosRef.current = {
            leftX: eyes.left.inner.x,
            leftY: eyes.left.inner.y,
            rightX: eyes.right.inner.x,
            rightY: eyes.right.inner.y
        };
        targetPosRef.current = { ...currentPosRef.current };

        function lerp(start, end, factor) {
            return start + (end - start) * factor;
        }

        function updateEyePositions() {
            const easing = 0.1;

            // Update both eyes
            currentPosRef.current = {
                leftX: lerp(currentPosRef.current.leftX, targetPosRef.current.leftX, easing),
                leftY: lerp(currentPosRef.current.leftY, targetPosRef.current.leftY, easing),
                rightX: lerp(currentPosRef.current.rightX, targetPosRef.current.rightX, easing),
                rightY: lerp(currentPosRef.current.rightY, targetPosRef.current.rightY, easing)
            };

            eyes.left.inner.x = currentPosRef.current.leftX;
            eyes.left.inner.y = currentPosRef.current.leftY;
            eyes.right.inner.x = currentPosRef.current.rightX;
            eyes.right.inner.y = currentPosRef.current.rightY;

            drawScene();
            animationFrameRef.current = requestAnimationFrame(updateEyePositions);
        }

        function drawEye(eye, isLeft = true) {
            // Draw outer eye (white part)
            c.beginPath();
            c.ellipse(eye.outer.x, eye.outer.y, eye.outer.radius, eye.outer.radius * 1.5, 0, 0, Math.PI * 2);
            c.fillStyle = 'white';
            c.fill();
            c.strokeStyle = 'rgba(0, 0, 0, 0.1)';
            c.lineWidth = 1;
            c.stroke();

            // Draw pupil (black part)
            c.beginPath();
            c.ellipse(eye.inner.x, eye.inner.y, eye.inner.radius, eye.inner.radius * 1.5, 0, 0, Math.PI * 2);
            c.fillStyle = 'black';
            c.fill();

            // Add shine to the eye
            const shineRadius = eye.inner.radius * 0.4;
            c.beginPath();
            c.arc(eye.inner.x + eye.inner.radius * 0.3,
                eye.inner.y - eye.inner.radius * 0.3,
                shineRadius, 0, Math.PI * 2);
            c.fillStyle = 'rgba(255, 255, 255, 0.8)';
            c.fill();
        }

        function drawScene() {
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.drawImage(img, 0, -90, canvas.width, canvas.height);

            drawEye(eyes.left, true);
            drawEye(eyes.right, false);
        }

        function calculateEyePosition(mouseX, mouseY, eye) {
            let dx = mouseX - eye.outer.x;
            let dy = mouseY - eye.outer.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let angle = Math.atan2(dy, dx);

            // Add subtle random movement
            const randomOffset = 0.3;
            const randomX = (Math.random() - 0.5) * randomOffset;
            const randomY = (Math.random() - 0.5) * randomOffset;

            // Constrain movement within the eye
            const maxDistance = eye.outer.radius - eye.inner.radius;
            const actualDistance = Math.min(distance, maxDistance);

            return {
                x: eye.outer.x + Math.cos(angle) * actualDistance * 0.7 + randomX,
                y: eye.outer.y + Math.sin(angle) * actualDistance * 0.7 + randomY
            };
        }

        function handleMouseMove(e) {
            let rect = canvas.getBoundingClientRect();
            let mouseX = e.clientX - rect.left;
            let mouseY = e.clientY - rect.top;

            // Calculate positions for both eyes
            const leftPos = calculateEyePosition(mouseX, mouseY, eyes.left);
            const rightPos = calculateEyePosition(mouseX, mouseY, eyes.right);

            // Update target positions
            targetPosRef.current = {
                leftX: leftPos.x,
                leftY: leftPos.y,
                rightX: rightPos.x,
                rightY: rightPos.y
            };
        }

        img.onload = function () {
            drawScene();
            updateEyePositions();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            drawScene();
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="flex bg-gray-100 rounded-lg overflow-hidden max-w-4xl shadow-lg w-full">
                <div className="w-1/2 bg-gray-200 flex items-center justify-center canvas-container">
                    <canvas ref={canvasRef} className="max-w-full"></canvas>
                </div>
                <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome back!</h1>
                    <p className="text-gray-600 mb-6">Please enter your details</p>

                    <label className="text-gray-700 text-sm mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
                        placeholder="Enter your email"
                    />

                    <label className="text-gray-700 text-sm mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
                        placeholder="Enter your password"
                    />

                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <input type="checkbox" id="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-sm text-gray-600">Remember me for 30 days</label>
                        </div>
                        <a href="#" className="text-sm text-gray-700 hover:underline">Forgot password?</a>
                    </div>

                    <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 mb-4">
                        Log in
                    </button>

                    <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-bold flex items-center justify-center">
                        <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" className="w-5 h-5 mr-2" />
                        Log in with Google
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account? <a href="#" className="text-black font-bold hover:underline">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;