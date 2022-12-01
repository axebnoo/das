import React from "react";
import { Tree } from "antd";
const { DirectoryTree } = Tree;

const TreeDirectory = (props) => {
    const onCheckedKeys = (treeData) => {
        // Сонгогдсон id-р дамжуулж position олох
        var itemid = props.checkID;
        var itemIdObj = {};

        itemid.forEach(function (element) {
            itemIdObj[element] = true;
        });

        var filteredArray = [];

        if (props.checkKey == 2) {
            treeData.forEach(function (elementRoot) {
                elementRoot.children.map((element) => {
                    if (itemIdObj[element.itemid])
                        filteredArray.push(element)
                });
            });
        } else if (props.checkKey == 3) {
            treeData.forEach(function (element) {
                if (itemIdObj[element.itemid])
                    filteredArray.push(element)
            });
        }

        var checkedItemid = [];
        filteredArray.map((item) => {
            checkedItemid.push(item.value);
        });

        return checkedItemid;
    }

    return (
        <DirectoryTree
            //  defaultCheckedKeys={onCheckedKeys(props.data)}
            checkedKeys={onCheckedKeys(props.data)}
            treeData={props.data}
            checkable
            height={600}
        />
    );
};

export default TreeDirectory;