export default {
  '/js/': [
    {
      text: '开始',
      items: [
        {
          text: '简介',
          link: '/js/introduction'
        },
        {
          text: '快速上手',
          link: '/js/get-started'
        }
      ],
    },
    {
      text: '基础',
      items: [
        {
          text: '语法与数据类型',
          link: '/js/basic/grammar-and-datas'
        },
        {
          text: '表达式与运算符',
          link: '/js/basic/expressions-and-operators'
        },
        {
          text: '流程控制',
          link: '/js/basic/grammar-and-types'
        },
        {
          text: '循环与迭代',
          link: '/js/basic/loops-and-iteration'
        },
        {
          text: '函数',
          link: '/js/basic/function'
        },
        {
          text: '类和对象',
          link: '/js/basic/class-and-object'
        }
      ]
    },
    {
      text: 'Web API',
      items: [
        {
          text: '内置对象',
          link: '/js/api/built-in-objects',
          collapsed: true,
          items: [
            {
              text: 'Array',
              link: '/js/api/built-in-objects/array'
            }
          ]
        },
        {
          text: 'DOM',
          link: '/js/api/dom'
        },
        {
          text: '事件流',
          link: '/js/api/event-flow'
        },
        {
          text: 'BOM',
          link: '/js/api/bom'
        }
      ]
    },
    {
      text: '进阶',
      items: [
        {
          text: '作用域与深浅拷贝',
          link: '/js/advanced/scope-and-copy'
        },
        {
          text: '函数进阶',
          link: '/js/advanced/function'
        },
        {
          text: '深入对象',
          link: '/js/advanced/in-depth-objects'
        },
        {
          text: '异步编程',
          link: '/js/advanced/async'
        },
        {
          text: '编程思想',
          link: '/js/advanced/programming-ideas'
        },
        {
          text: '设计模式',
          link: '/js/advanced/design-patterns'
        }
      ]
    }
  ]
  ,
  '/ts/': [
    {
      text: '开始',
      items: [
        {
          text: '快速上手',
          link: '/ts/get-started'
        }
      ]
    }
  ]
}