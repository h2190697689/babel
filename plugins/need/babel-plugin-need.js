export default function(babel) {
    return {
        visitor: {
            ImportDeclaration(path, _ref = { opts: {} }) {
                const specifiers = path.node.specifiers;
                const source = path.node.source;
                // 只有libraryName满足才会转码
                if (_ref.opts.library == source.value && (!t.isImportDefaultSpecifier(specifiers[0]))) { //_ref.opts是传进来的参数
                    var declarations = specifiers.map((specifier) => {      //遍历  uniq extend flatten cloneDeep
                        return t.ImportDeclaration(                         //创建importImportDeclaration节点
                            [t.importDefaultSpecifier(specifier.local)],
                            t.StringLiteral(`${source.value}/${specifier.local.name}`)
                        )
                    })
                    path.replaceWithMultiple(declarations)
                }
            }
        }
    }
}


