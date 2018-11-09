import * as React from 'react';

const ErudaObject = () => (
    <ul className="eruda-object">
        <li>
            <span className="eruda-key">123</span>
            <span className="eruda-special">321</span>
        </li>
        <li>
            <span className="eruda-expanded eruda-collapsed">123</span>
            <span className="eruda-key">123</span>
            <span className="eruda-special">321</span>
            <span className="eruda-open">（）</span>
            <ErudaObject />
        </li>
    </ul>
);

export class ErudaLogger extends React.Component<Props> {
    state = {};

    render() {
        return (
            <ul className="eruda-logs">
                <li>
                    <div className="eruda-input eruda-log-item">
                        <div className="eruda-icon-container">
                            <span className="eruda-icon eruda-icon-arrow-right" />
                        </div>
                        <div className="eruda-count eruda-hidden" />
                        <div className="eruda-log-content-wrapper">
                            <div className="eruda-log-content">location</div>
                            <div className="eruda-json">
                                <span />
                                <span className="eruda-open" />
                                <ErudaObject />
                                <span className="eruda-close" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}

interface Props {}
