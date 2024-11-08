interface TreeNode {
    key: String; // 节点的值
    name: String; // 节点的值
    children: TreeNode[] | null; // 子节点数组，可能是空（表示没有子节点）
}
interface findDeepTree {
    tree: number; // 最长树对于当前树的数组中的位置
    max: number; // 最长树的高度
}
interface mergeResult {
    level: number // 当前树的深度
    index: number; // 最长树对于当前树的数组中的位置
}

export const taransform = (trees: Array<TreeNode>) => {
    // 1.找到最深层树
    let { tree, max } = findDeepTree(trees)
    console.log(tree, max)
    // 2.创建数组结构
    // 最后结果的数组
    let treeArr = new Array(max).fill(0).map(() => new Array())
    // 最长的树,以这个为基础建数组
    let baseTree = trees.splice(tree, 1)[0]
    console.log(baseTree, treeArr)
    let createTreeArr = (tree: TreeNode, current: number, parent: string | null) => {
        let { children, key, name } = tree
        let index = treeArr[current].findIndex(item => item.value == tree.key)
        console.log(index, key)
        if (index == -1) {
            treeArr[current].push({
                label: name,
                value: key,
                parent: [parent]
            })
        } else {
            if (parent) {
                treeArr[current][index].parent.push(parent)
            }
        }
        children?.forEach(item => {
            createTreeArr(item, current + 1, key)
        })
    }
    // 用最长的树构建数组
    createTreeArr(baseTree, 0, null)
    console.log(treeArr)

    let dfs: (tree: TreeNode, level: number) => mergeResult | undefined = (tree, level) => {
        // debugger
        let index
        index = treeArr.findIndex(item => item.some(secItem => secItem.value == tree.key))
        if (index != -1) {
            return { index: index, level }
        }
        for (let i = 0; i < tree.children.length; i++) {
            let ans = dfs(tree.children[i], level + 1)
            if (ans) {
                return ans
            }
        }
    }
    trees.forEach(item => {
        console.log(item)
        let { level, index } = dfs(item, 0)
        console.log(level, index)
        // 找到start的index
        let start = index - level < 0 ? 0 : index - level
        while (level > index) {
            treeArr.unshift([])
            level--
        }
        createTreeArr(item, start, null)
    })
    console.log(treeArr)
    return treeArr
}

const findDeepTree: (trees: Array<TreeNode>) => findDeepTree = (trees: Array<TreeNode>) => {
    let tree = 0, max = -1
    trees.forEach((item, index) => {
        let deep = 0
        let dfs: (level: number, tree: TreeNode) => void = (level, tree) => {
            if (level > deep) {
                deep = level
            }
            tree.children?.forEach(item => {
                dfs(level + 1, item)
            })
        }
        dfs(1, item)
        if (max < deep) {
            max = deep
            tree = index
        }
    })
    return { tree, max }
}

let data1 = {
    name: '1',
    key: '1',
    children: [
        {
            name: '2',
            key: '2',
            children: [
                {
                    name: '6',
                    key: '6',
                    children: [
                        {
                            name: '7',
                            key: '7',
                            children: [
                                {
                                    name: '8',
                                    key: '8',
                                },
                                {
                                    name: '20',
                                    key: '20',
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '3',
            key: '3'
        },
        {
            name: '4',
            key: '4'
        }
    ]
}
let data2 = {
    name: '9',
    key: '9',
    children: [
        {
            name: '7',
            key: '7',
            children: [
                {
                    name: '8',
                    key: '8'
                },
                {
                    name: '20',
                    key: '20'
                }
            ]
        },
        {
            name: '10',
            key: '10',
            children: [
                {
                    name: '11',
                    key: '11',
                    children: [
                        {
                            name: '12',
                            key: '12',
                            children: [
                                {
                                    name: '13',
                                    key: '13',
                                    children: [
                                        {
                                            name: '14',
                                            key: '14',
                                            children: [
                                                {
                                                    name: '15',
                                                    key: '15',
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
let data3 = {
    key: '5',
    name: '5',
    children: [
        {
            name: '6',
            key: '6',
            children: [
                {
                    name: '7',
                    key: '7',
                    children: [
                        {
                            name: '8',
                            key: '8',
                        },
                        {
                            name: '20',
                            key: '20',
                        }
                    ]
                }
            ]
        }
    ]
}
let trees = [data1, data2, data3]
taransform(trees)

let arr = [
    [{
        key: '1',
        name: '1'
    }],
    [
        {
            key: '2',
            name: '2'
        },
        {
            key: '3',
            name: '3'
        },
        {
            key: '4',
            name: '4'
        }
    ],
    [
        {
            key: '6',
            name: '6'
        },
        {
            key: '9',
            name: '9'
        }
    ],
    [
        {
            key: '7',
            name: '7'
        },
        {
            key: '10',
            name: '10'
        }
    ],
    [
        {
            key: '11',
            name: '11'
        },
        {
            key: '8',
            name: '8'
        },
        {
            key: '20',
            name: '20'
        },
    ],
    [
        {
            key: '12',
            name: '12'
        },
    ],
    [
        {
            key: '13',
            name: '13'
        },
    ],
    [
        {
            key: '14',
            name: '14'
        },
    ],
    [
        {
            key: '15',
            name: '15'
        },
    ]
]

