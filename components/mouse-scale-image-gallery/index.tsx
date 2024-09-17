import React from "react";
import { projects } from "./data";
import Double from "./Double";

const MouseScaleImageGallery = () => {
    return (
        <main className="mt-[5vh] text-white pb-[10vh]">
            <h1 className="p-[20px] text-[5vw] max-w-[80%] font-normal">
                We use design and technology to create brands and products that
                perform, delight, and scale.
            </h1>

            <div className="">
                <Double projects={[projects[0], projects[1]]} />
                <Double projects={[projects[2], projects[3]]} reversed={true} />
                <Double projects={[projects[4], projects[5]]} />
                <Double projects={[projects[6], projects[7]]} reversed={true} />
            </div>
        </main>
    );
};

export default MouseScaleImageGallery;
