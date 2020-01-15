import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import styles from './HelpList.module.less'
import { Accordion } from 'antd-mobile'

const data = [
  [
    {
      header: '关于版本控制',
      content:
        '什么是“版本控制”？我为什么要关心它呢？ 版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 在本书所展示的例子中，我们对保存着软件源代码的文件作版本控制，但实际上，你可以对任何类型的文件进行版本控制。',
    },
    {
      header: 'Git 简史',
      content:
        'Linux 内核开源项目有着为数众多的参与者。 绝大多数的 Linux 内核维护工作都花在了提交补丁和保存归档的繁琐事务上（1991－2002年间）。 到 2002 年，整个项目组开始启用一个专有的分布式版本控制系统 BitKeeper 来管理和维护代码。',
    },
    {
      header: 'Git 基础',
      content:
        'Git 和其它版本控制系统（包括 Subversion 和近似工具）的主要差别在于 Git 对待数据的方法。 概念上来区分，其它大部分系统以文件变更列表的方式存储信息。 这类系统（CVS、Subversion、Perforce、Bazaar 等等）将它们保存的信息看作是一组基本文件和每个文件随时间逐步累积的差异。',
    },
    {
      header: '获取 Git 仓库',
      content:
        '假如你只能阅读一章来学习 Git，本章就是你的不二选择。 本章内容涵盖你在使用 Git 完成各种工作中将要使用的各种基本命令。 在学习完本章之后，你应该能够配置并初始化一个仓库（repository）、开始或停止跟踪（track）文件、暂存（stage）或提交（commit)更改。 本章也将向你演示如何配置 Git 来忽略指定的文件和文件模式、如何迅速而简单地撤销错误操作、如何浏览你的项目的历史版本以及不同提交（commits）间的差异、如何向你的远程仓库推送（push）以及如何从你的远程仓库拉取（pull）文件。',
    },
    {
      header: '记录每次更新到仓库',
      content:
        '现在我们手上有了一个真实项目的 Git 仓库，并从这个仓库中取出了所有文件的工作拷贝。 接下来，对这些文件做些修改，在完成了一个阶段的目标之后，提交本次更新到仓库。',
    },
    {
      header: '查看提交历史',
      content:
        '在提交了若干更新，又或者克隆了某个项目之后，你也许想回顾下提交历史。 完成这个任务最简单而又有效的工具是 git log 命令。',
    },
    {
      header: '撤消操作',
      content:
        '在任何一个阶段，你都有可能想要撤消某些操作。 这里，我们将会学习几个撤消你所做修改的基本工具。 注意，有些撤消操作是不可逆的。 这是在使用 Git 的过程中，会因为操作失误而导致之前的工作丢失的少有的几个地方之一。',
    },
    {
      header: '远程仓库的使用',
      content:
        '为了能在任意 Git 项目上协作，你需要知道如何管理自己的远程仓库。 远程仓库是指托管在因特网或其他网络中的你的项目的版本库。 你可以有好几个远程仓库，通常有些仓库对你只读，有些则可以读写。 与他人协作涉及管理远程仓库以及根据需要推送或拉取数据。 管理远程仓库包括了解如何添加远程仓库、移除无效的远程仓库、管理不同的远程分支并定义它们是否被跟踪等等。 在本节中，我们将介绍一部分远程管理的技能。',
    },
    {
      header: '打标签',
      content:
        '像其他版本控制系统（VCS）一样，Git 可以给历史中的某一个提交打上标签，以示重要。 比较有代表性的是人们会使用这个功能来标记发布结点（v1.0 等等）。 在本节中，你将会学习如何列出已有的标签、如何创建新标签、以及不同类型的标签分别是什么。',
    },
  ],
  [
    {
      header: '远程仓库的使用',
      content:
        '为了能在任意 Git 项目上协作，你需要知道如何管理自己的远程仓库。 远程仓库是指托管在因特网或其他网络中的你的项目的版本库。 你可以有好几个远程仓库，通常有些仓库对你只读，有些则可以读写。 与他人协作涉及管理远程仓库以及根据需要推送或拉取数据。 管理远程仓库包括了解如何添加远程仓库、移除无效的远程仓库、管理不同的远程分支并定义它们是否被跟踪等等。 在本节中，我们将介绍一部分远程管理的技能。',
    },
    {
      header: 'Git 别名',
      content:
        '在我们结束本章 Git 基础之前，正好有一个小技巧可以使你的 Git 体验更简单、容易、熟悉：别名。 我们不会在之后的章节中引用到或假定你使用过它们，但是你大概应该知道如何使用它们。',
    },
  ],
  [
    {
      header: '选择修订版本',
      content:
        '现在，你已经学习了管理或者维护 Git 仓库、实现代码控制所需的大多数日常命令和工作流程。 你已经尝试了跟踪和提交文件的基本操作，并且发挥了暂存区和轻量级的分支及合并的威力。',
    },
    {
      header: '交互式暂存',
      content:
        'Git 自带的一些脚本可以使在命令行下工作更容易。 本节的几个交互命令可以帮助你将文件的特定部分组合成提交。 当你修改一组文件后，希望这些改动能放到若干提交而不是混杂在一起成为一个提交时，这几个工具会非常有用。 通过这种方式，可以确保提交是逻辑上独立的变更集，同时也会使其他开发者在与你工作时很容易地审核。 如果运行 git add 时使用 -i 或者 --interactive 选项，Git 将会进入一个交互式终端模式',
    },
    {
      header: '储藏与清理',
      content:
        '有时，当你在项目的一部分上已经工作一段时间后，所有东西都进入了混乱的状态，而这时你想要切换到另一个分支做一点别的事情。 问题是，你不想仅仅因为过会儿回到这一点而为做了一半的工作创建一次提交。 针对这个问题的答案是 git stash 命令。',
    },
  ],
  [
    {
      header: '底层命令和高层命令',
      content:
        '内容寻址文件系统层是一套相当酷的东西，所以在本章我们会先讲解这部分内容。随后我们会学习传输机制和版本库管理任务——你迟早会和它们打交道。',
    },
    {
      header: 'Git 对象',
      content:
        'Git 是一个内容寻址文件系统。 看起来很酷， 但这是什么意思呢？ 这意味着，Git 的核心部分是一个简单的键值对数据库（key-value data store）。 你可以向该数据库插入任意类型的内容，它会返回一个键值，通过该键值可以在任意时刻再次检索（retrieve）该内容。 可以通过底层命令 hash-object 来演示上述效果——该命令可将任意数据保存于 .git 目录，并返回相应的键值。 首先，我们需要初始化一个新的 Git 版本库',
    },
    {
      header: '传输协议',
      content:
        'Git 可以通过两种主要的方式在版本库之间传输数据：“哑（dumb）”协议和“智能（smart）”协议。 本节将会带你快速浏览这两种协议的运作方式。',
    },
  ],
]

class HelpList extends PureComponent {
  constructor(props) {
    // 构造方法
    super(props) // 调用父类构造函数，返回子类实例
    this.state = {
      key: '0',
      tag: 0,
    }
  }

  componentDidMount() {
    let u = window.location.href
    let index = u.indexOf('?')
    u = u.substr(index + 1)
    let arr = u.split('&')
    let t, k
    if (arr.length > 1) {
      t = arr[0].substr(arr[0].indexOf('=') + 1)
      k = arr[1].substr(arr[1].indexOf('=') + 1)
      this.setState({
        key: k,
        tag: t,
      })
    }
  }

  onChange = key => {
    this.setState({
      key,
    })
  }

  render() {
    const accordion1 = data[this.state.tag].map((item, index) => (
      <Accordion.Panel
        header={item.header}
        className={styles['pad']}
        key={index}
      >
        <div className={styles['content']}>
          <p>{item.content}</p>
        </div>
      </Accordion.Panel>
    ))
    let k = this.state.key
    return (
      <div className={styles['help-list-container']}>
        <Accordion
          activeKey={k}
          accordion
          className={styles['my-accordion']}
          onChange={this.onChange}
        >
          {accordion1}
        </Accordion>
      </div>
    )
  }
}

export default withRouter(HelpList)
