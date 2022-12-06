import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="collapse collapse-arrow border">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium peer-checked:bg-neutral peer-checked:text-white text-left">
                    Invest On Yourself To Develop Your Skills Is The Best Investment.
                </div>
                <div className="collapse-content peer-checked:bg-accent peer-checked:text-white text-left m-2 p-1">
                    <p>
                        Everyone wants to invest their money safely. However some of their investment reduced, some are succeeded.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Blogs;