export const RatingSelect = () => {
    const RATING = [1, 2, 3, 4, 5];

    return (
        <>
            <label htmlFor="rating-id">Rating</label>
            <select
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
        </>
    );
};
