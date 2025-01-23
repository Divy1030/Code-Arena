import React, { useEffect, useRef } from 'react';

const Login = () => {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef();
    const eyePositionsRef = useRef({
        left: { outer: { x: 275, y: 230 }, inner: { x: 275, y: 230 } },
        left1: { outer: { x: 210, y: 105 }, inner: { x: 210, y: 105 } },
        right1: { outer: { x: 240, y: 105 }, inner: { x: 240, y: 105 } },
        right: { outer: { x: 295, y: 230 }, inner: { x: 295, y: 230 } }
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = document.querySelector('.canvas-container');
        const c = canvas.getContext('2d');

        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        // window.addEventListener('mousemove', function (e) {
        //     console.log(e);
        //     mouse.x = e.x;
        //     mouse.y = e.y;
        //     console.log(mouse);
        
        
        // });

        const eyes = {
            left: {
                baseX: 275,
                baseY: 230,
                outerRadius: 7,
                innerRadius: 4
            },
            left1: {
                baseX: 210,
                baseY: 105,
                outerRadius: 7,
                innerRadius: 4
            },
            right1: {
                baseX: 240,
                baseY: 105,
                outerRadius: 7,
                innerRadius: 4
            },
            right: {
                baseX: 295,
                baseY: 230,
                outerRadius: 7,
                innerRadius: 4
            }
        };

        function lerp(start, end, factor) {
            return start + (end - start) * factor;
        }

        function calculateEyePosition(mouseX, mouseY, eye, extra) {
            const outerOvalWidth = 20 + extra;
            const outerOvalHeight = 20 + extra/3;
            const leftOffset = -20;

            let dx = mouseX - eye.baseX;
            let dy = mouseY - eye.baseY;
            let angle = Math.atan2(dy, dx);

            let outerX = (eye.baseX + leftOffset) + Math.cos(angle) * outerOvalWidth;
            let outerY = eye.baseY + Math.sin(angle) * outerOvalHeight;

            let innerDx = mouseX - outerX;
            let innerDy = mouseY - outerY;
            let innerAngle = Math.atan2(innerDy, innerDx);
            let innerDistance = 2;

            let innerX = outerX + Math.cos(innerAngle) * innerDistance;
            let innerY = outerY + Math.sin(innerAngle) * innerDistance;

            return {
                outer: { x: outerX, y: outerY },
                inner: { x: innerX, y: innerY }
            };
        }

        function drawEye(positions, radius) {
            // Draw outer eye (white part)
            c.beginPath();
            c.ellipse(positions.outer.x, positions.outer.y, radius.outerRadius,
                radius.outerRadius * 1.5, 0, 0, Math.PI * 2);
            c.fillStyle = 'white';
            c.fill();
            c.strokeStyle = 'rgba(0, 0, 0, 0.1)';
            c.stroke();

            // Draw inner eye (pupil)
            c.beginPath();
            c.ellipse(positions.inner.x, positions.inner.y, radius.innerRadius,
                radius.innerRadius * 1.5, 0, 0, Math.PI * 2);
            c.fillStyle = 'black';
            c.fill();

            // Draw shine
            const shineRadius = radius.innerRadius * 0.4;
            c.beginPath();
            c.arc(positions.inner.x + radius.innerRadius * 0.3,
                positions.inner.y - radius.innerRadius * 0.3,
                shineRadius, 0, Math.PI * 2);
            c.fillStyle = 'rgba(255, 255, 255, 0.8)';
            c.fill();
        }

        function animate() {
            c.clearRect(0, 0, canvas.width, canvas.height);

            // Draw background image
            if (img.complete) {
                c.drawImage(img, 0, -90, canvas.width, canvas.height);
            }

            // Draw all three eyes
            drawEye(eyePositionsRef.current.left,
                { outerRadius: eyes.left.outerRadius, innerRadius: eyes.left.innerRadius });
            drawEye(eyePositionsRef.current.left1,
                { outerRadius: eyes.left1.outerRadius, innerRadius: eyes.left1.innerRadius });
            drawEye(eyePositionsRef.current.right1,
                { outerRadius: eyes.right1.outerRadius, innerRadius: eyes.right1.innerRadius });
            drawEye(eyePositionsRef.current.right,
                { outerRadius: eyes.right.outerRadius, innerRadius: eyes.right.innerRadius });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        function handleMouseMove(e) {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const leftPos = calculateEyePosition(mouseX, mouseY, eyes.left, 0);
            const left1Pos = calculateEyePosition(mouseX, mouseY, eyes.left1, 10);
            const right1Pos = calculateEyePosition(mouseX, mouseY, eyes.right1, 10);
            const rightPos = calculateEyePosition(mouseX, mouseY, eyes.right, 0);

            // Smooth transition to new positions
            const easing = 0.1;
            eyePositionsRef.current = {
                left: {
                    outer: {
                        x: lerp(eyePositionsRef.current.left.outer.x, leftPos.outer.x, easing),
                        y: lerp(eyePositionsRef.current.left.outer.y, leftPos.outer.y, easing)
                    },
                    inner: {
                        x: lerp(eyePositionsRef.current.left.inner.x, leftPos.inner.x, easing),
                        y: lerp(eyePositionsRef.current.left.inner.y, leftPos.inner.y, easing)
                    }
                },
                left1: {
                    outer: {
                        x: lerp(eyePositionsRef.current.left1.outer.x, left1Pos.outer.x, easing),
                        y: lerp(eyePositionsRef.current.left1.outer.y, left1Pos.outer.y, easing)
                    },
                    inner: {
                        x: lerp(eyePositionsRef.current.left1.inner.x, left1Pos.inner.x, easing),
                        y: lerp(eyePositionsRef.current.left1.inner.y, left1Pos.inner.y, easing)
                    }
                },
                right1: {
                    outer: {
                        x: lerp(eyePositionsRef.current.right1.outer.x, right1Pos.outer.x, easing),
                        y: lerp(eyePositionsRef.current.right1.outer.y, right1Pos.outer.y, easing)
                    },
                    inner: {
                        x: lerp(eyePositionsRef.current.right1.inner.x, right1Pos.inner.x, easing),
                        y: lerp(eyePositionsRef.current.right1.inner.y, right1Pos.inner.y, easing)
                    }
                },
                right: {
                    outer: {
                        x: lerp(eyePositionsRef.current.right.outer.x, rightPos.outer.x, easing),
                        y: lerp(eyePositionsRef.current.right.outer.y, rightPos.outer.y, easing)
                    },
                    inner: {
                        x: lerp(eyePositionsRef.current.right.inner.x, rightPos.inner.x, easing),
                        y: lerp(eyePositionsRef.current.right.inner.y, rightPos.inner.y, easing)
                    }
                }
            };
        }

        const img = new Image();
        img.src = 'https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1024x768&vertical=center';
        img.onload = animate;

        window.addEventListener('mousemove', handleMouseMove);

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