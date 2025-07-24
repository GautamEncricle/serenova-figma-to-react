const TourCard = ({ tour: { image, title, category, details } }) => (
    <div className="bg-cream rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col flex-grow justify-evenly">
            <h3 className="font-teachers font-400">{title}</h3>
            <p className="text-sm text-cream-dark font-sans tracking-wide mt-1">
                {category}
            </p>
            <div className="mt-4 pt-4 space-y-3 font-sans  text-sm">
                {details.map((detail, index) =>
                    index === details.length - 1 ? (
                        <div
                            key={index}
                            className="flex justify-between items-center text-stone-600"
                        >
                            <span className="font-teacher text-stone-800">{detail.label}</span>
                            <span className="text-cream-dark">{detail.value}</span>
                        </div>
                    ) : (
                        <div
                            key={index}
                            className="flex border-b py-[5px] border-dark justify-between items-center text-stone-600"
                        >
                            <span className="font-teacher text-stone-800">
                                {detail.label}
                            </span>
                            <span className="text-cream-dark">
                                {detail.value}
                            </span>
                        </div>
                    ),
                )}
            </div>
        </div>
    </div>
);

export default TourCard;