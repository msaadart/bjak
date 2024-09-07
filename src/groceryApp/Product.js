const Product = ({ product, onVote }) => {
    const plus = () => {
        onVote(1); // Increase vote
    };
    const minus = () => {
        onVote(-1); // Decrease vote
    };
    return (

        <li class="mt-2">
            <span>{product.name}</span> - <span class="mr-2">votes: {product.votes}</span>
            <div class="inline-flex rounded-md shadow-sm" role="group">
                <button type="button" onClick={plus} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    +
                </button>
                <button type="button" onClick={minus} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    -
                </button>
            </div>
        </li>

    );
};

export default Product;