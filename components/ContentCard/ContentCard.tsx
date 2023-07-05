interface ContentCardProps {
    title: string;
    children: React.ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, children }) => {
    return (
        <div className="content-card">
            <div
                className="group rounded-lg border border-transparent px-5 py-4 mb-16 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
            >
                <h2 className={`mb-3 text-3xl font-semibold`}>
                    {title}{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <div className="text-gray-500 dark:text-neutral-400">
                {children}
                </div>
            </div>
        </div>
    );
}

export default ContentCard;
