// ---------- starfield ----------
        (function () {
            const canvas = document.getElementById('starfield');
            const ctx = canvas.getContext('2d');
            let w, h, stars;
            const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            function resize() {
                w = canvas.width = window.innerWidth;
                h = canvas.height = window.innerHeight;
                const count = Math.min(140, Math.floor((w * h) / 14000));
                stars = Array.from({ length: count }, () => ({
                    x: Math.random() * w, y: Math.random() * h,
                    r: Math.random() * 1.4 + 0.3,
                    vx: (Math.random() - 0.5) * 0.06, vy: (Math.random() - 0.5) * 0.06,
                    tw: Math.random() * Math.PI * 2
                }));
            }
            window.addEventListener('resize', resize);
            resize();

            function draw() {
                ctx.clearRect(0, 0, w, h);
                ctx.fillStyle = '#4df3ff';
                stars.forEach(s => {
                    s.x += s.vx; s.y += s.vy; s.tw += 0.02;
                    if (s.x < 0) s.x = w; if (s.x > w) s.x = 0;
                    if (s.y < 0) s.y = h; if (s.y > h) s.y = 0;
                    const alpha = 0.35 + Math.sin(s.tw) * 0.3;
                    ctx.globalAlpha = Math.max(0.08, alpha);
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                    ctx.fill();
                });
                ctx.globalAlpha = 1;
                ctx.strokeStyle = 'rgba(77,243,255,0.08)';
                for (let i = 0; i < stars.length; i++) {
                    for (let j = i + 1; j < stars.length; j++) {
                        const dx = stars[i].x - stars[j].x, dy = stars[i].y - stars[j].y;
                        const d = Math.sqrt(dx * dx + dy * dy);
                        if (d < 110) {
                            ctx.beginPath();
                            ctx.moveTo(stars[i].x, stars[i].y);
                            ctx.lineTo(stars[j].x, stars[j].y);
                            ctx.stroke();
                        }
                    }
                }
                if (!reduced) requestAnimationFrame(draw);
            }
            draw();
        })();

        const spotlight = document.getElementById('spotlight');
        const bgGrid = document.getElementById('bgGrid');
        window.addEventListener('mousemove', (e) => {
            const xp = (e.clientX / window.innerWidth * 100).toFixed(1);
            const yp = (e.clientY / window.innerHeight * 100).toFixed(1);
            spotlight.style.setProperty('--mx', xp + '%');
            spotlight.style.setProperty('--my', yp + '%');
        });

        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            bgGrid.style.transform = `translateY(${y * 0.06}px)`;
            const doc = document.documentElement;
            const pct = (y / (doc.scrollHeight - doc.clientHeight)) * 100;
            document.getElementById('progress').style.width = pct + '%';
        });

        document.querySelectorAll('.panel').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const r = card.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width;
                const py = (e.clientY - r.top) / r.height;
                const rotY = (px - 0.5) * 8;
                const rotX = (0.5 - py) * 8;
                card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-2px)`;
                card.style.setProperty('--px', (px * 100) + '%');
                card.style.setProperty('--py', (py * 100) + '%');
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateY(0)';
            });
        });

        const heroName = document.getElementById('heroName');
        setInterval(() => {
            heroName.classList.add('glitch');
            setTimeout(() => heroName.classList.remove('glitch'), 280);
        }, 4500);

        function tick() {
            const d = new Date();
            document.getElementById('clock').textContent = d.toTimeString().slice(0, 8);
        }
        tick(); setInterval(tick, 1000);

        const bootLines = [
            "> initializing KHUSHI_K_YADAV_OS ...",
            "> loading kernel modules [AI/ML, CLOUD, DSA] ...",
            "> mounting profile: /users/khushi_k_yadav",
            "> status: <span class='ok'>ALL SYSTEMS NOMINAL</span>",
        ];
        const bootEl = document.getElementById('bootLog');
        let li = 0, ci = 0;

        function typeBoot() {
            if (li < bootLines.length) {
                const full = bootLines[li];
                const plain = full.replace(/<[^>]+>/g, '');
                if (ci <= plain.length) {
                    if (full.includes('<span')) {
                        bootEl.innerHTML = bootLines.slice(0, li).join('<br>') + (li > 0 ? '<br>' : '') +
                            (ci >= plain.length ? full : plain.slice(0, ci)) + '<span class="cursor"></span>';
                    } else {
                        bootEl.innerHTML = bootLines.slice(0, li).join('<br>') + (li > 0 ? '<br>' : '') +
                            plain.slice(0, ci) + '<span class="cursor"></span>';
                    }
                    ci++;
                    setTimeout(typeBoot, 18);
                } else {
                    li++; ci = 0;
                    setTimeout(typeBoot, 220);
                }
            } else {
                bootEl.innerHTML = bootLines.join('<br>');
                revealHero();
            }
        }
        typeBoot();

        function revealHero() {
            document.getElementById('idFrame').classList.add('fade-in');
            setTimeout(() => document.getElementById('heroName').classList.add('fade-in'), 150);
            setTimeout(() => document.getElementById('heroRole').classList.add('fade-in'), 320);
            setTimeout(() => document.getElementById('heroTag').classList.add('fade-in'), 480);
            setTimeout(() => document.getElementById('heroCta').classList.add('fade-in'), 640);
            setTimeout(() => {
                document.getElementById('heroStats').classList.add('fade-in');
                animateCounters();
            }, 800);
        }

        function animateCounters() {
            document.querySelectorAll('.num[data-count]').forEach(el => {
                const target = parseInt(el.getAttribute('data-count'), 10);
                let cur = 0;
                const step = Math.max(1, Math.round(target / 30));
                const iv = setInterval(() => {
                    cur += step;
                    if (cur >= target) { cur = target; clearInterval(iv); }
                    el.textContent = cur + '+';
                }, 40);
            });
        }

        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); } });
        }, { threshold: 0.18 });
        document.querySelectorAll('.reveal, .telemetry .item').forEach(el => obs.observe(el));