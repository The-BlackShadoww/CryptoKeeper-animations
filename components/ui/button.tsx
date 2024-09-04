type TitleType = {
    title: string;
};

export const ButtonForHeader = ({ title }: TitleType) => {
    return (
        <button className="bg-primaryColor text-[#000000] text-base font-bold px-7 py-[14px] rounded-full hover:opacity-50 transition-all ease-linear">
            {title}
        </button>
    );
};
