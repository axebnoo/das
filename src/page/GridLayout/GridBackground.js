import React, { useCallback } from "react";
import { times } from "lodash";

const PATTERN_NAME = "grid_layout_pattern";

const GridBackground = (props) => {
    const { containerWidth, cols, rowHeight, padding, background } = props;

    const renderPattern = useCallback(() => {
        const [horizontalPadding, verticalPadding] = padding;
        const paddingWidth = verticalPadding * (cols - 1);
        const columnWidth = (containerWidth - paddingWidth) / cols;
        return (
            <pattern
                id={PATTERN_NAME}
                patternUnits="userSpaceOnUse"
                width="100%"
                height={rowHeight + horizontalPadding}
            >
                {times(cols).map((value, index) => {
                    return (
                        <rect
                            key={index}
                            x={(columnWidth + verticalPadding) * index}
                            y={0}
                            width={columnWidth}
                            height={rowHeight}
                            fill={background}
                        />
                    );
                })}
            </pattern>
        );
    }, [containerWidth, cols, padding, rowHeight, background]);

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }}
        >
            <svg width="100%" height="100%">
                <defs>{renderPattern()}</defs>
                <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill={`url(#${PATTERN_NAME})`}
                />
            </svg>
        </div>
    );
};

GridBackground.defaultProps = {
    background: "hsl(210, 44%, 91%)"
};

export default GridBackground;