### 添加工作区到暂存区
作用：添加工作区一个或多个文件的修改到暂存区
命令形式：git add 单个文件名|通配符
将所有修改加入暂存区：`git add .`
### 提交暂存区到本地仓库
作用：提交暂存区汇总所有内容到本地仓库的当前分支
命令形式：`git commit -m ‘注释内容’`
### 版本回退
作用：版本切换
命令形式：`git reset --hard commitID`
commitID 可以使用 `git-log` 或 `git log`指令查看
查看已经删除的记录：
`git reflog`
所以
`git reset --hard commitID`既可以做版本回退，也可以做版本还原
### 创建本地分支
命令：`git branch 分支名`
创建的新分支会建立在当前分支的版本之上，所以新建的分支会有当前分支的内容
### 切换分支
命令：`git checkout 分支名`
我们还可以直接切换到一个不存在的分支（创建并切换）
命令：`git checkout -b 分支名`
### 合并分支
命令：`git merge 分支名称`
### 删除分支
不能删除当前分支，只能删除其他分支
`git branch -d b1` 删除分支时，需要做各种检查
`git branch -D b1` 不做任何检查，强制删除
### 操作远程仓库
命令： `git remote add <远端名称> <仓库路径SSH>`
远端名称，默认是origin，取决于远端服务器设置
仓库路径，从远端服务器获取此SSH
### 推送到远程仓库
命令：`git push [-f] [–set-upstream] [远端名称 [本地分支名][:远端分支名] ]`
如果远程分支名和本地分支名称相同，则可以只写本地分支
​本来是：`git push origin master ：master` 表示将本地仓库的master分支提交到远程仓库的master分支
`git push origin master` 这里表示将本地仓库当前master分支的内容推到远程仓库上面去
-f 表示强制覆盖
–set-upstream 推送到远端的同时并且建立起和远端分支的关联关系。
`git push --set-upstream origin master`
如果当前分支已经和远端分支关联，则可以省略分支名和远端名。