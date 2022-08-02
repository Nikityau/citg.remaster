import React from 'react';
import PageLineUi from "ui/PageLine.ui/PageLine.ui";

const Adavantages__TextTablet = () => {
    return (
        <div className={'advantages__text_tablet'}>
            <div className={'advantages__text-title_tablet'}>
                <h3> Преимущества </h3>
            </div>
            <div className={'advantages__text-number_tablet'}>
                <PageLineUi
                    pageNum={'01'}
                />
            </div>
        </div>
    );
};

export default Adavantages__TextTablet;