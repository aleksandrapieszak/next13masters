export const RatingSelect = () => {
    const RATING = [1, 2, 3, 4, 5];

    return (
        <>
            <label htmlFor="rating-id"></label>
            <div className="lg:w-1/4 w-full"> {/* <-- Dodane klasy tutaj */}
                <div className="block text-sm font-medium leading-6 text-gray-900">
                    <p className="block text-sm font-medium leading-6 text-gray-900">Rating</p>
            <select
                className="relative w-full cursor-default rounded-md bg-white py-1.5 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="rating"
                id="rating-id"
                required
            >
                <option value="" disabled>Choose a rating:</option>
                {RATING.map(r => (
                    <option key={r} value={r}>
                        {r} stars
                    </option>
                ))}
            </select>
                </div>
            </div>
        </>
    );
};
