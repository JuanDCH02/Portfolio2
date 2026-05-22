
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
    export default function BackgroundParticles() {
    const options = {
        
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'attract',
                },
            },
        },
        particles: {
            number: {
                value: 45,
            },
            links: {
                enable: true,
                distance: 150,
                opacity: 0.25,
            },
            move: {
                enable: true,
                speed: .5,
            },
            color:{ value: '#fbad2b'
            }
        },
    };
    (async () => { await loadSlim(tsParticles);
        await tsParticles.load({ id: "tsparticles", options, });
    })();
    return <div id="tsparticles" className=" -z-10" />
}

