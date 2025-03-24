<!-- <script setup lang="ts">
import index from './views/testAieditor/index.vue'
console.log('这里执行')
</script>

<template>
    <div class="box">
        <index></index>
    </div>
</template>

<style scoped lang="less">
.box {
    // margin: 20px;
    height: 400px;
}
</style> -->
<template>
    <div class="article-container">
        <div class="article-content" ref="articleContent">
            <template v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="item">
                <h1 :id="`section${item}`">第{{ item }}章</h1>
                <div style="height: 200px; background-color: pink">第{{ item }}章内容</div>
            </template>
        </div>
        <div class="toc" ref="toc"></div>
    </div>
</template>

<script>
export default {
    data() {
        content: [
            {
                label: '第一章内容',
                title: '第一章',
                id: 1
            },
            {
                label: '第二章内容',
                title: '第一章',
                id: 1
            },
            {
                label: '第一章内容',
                title: '第一章',
                id: 1
            },
            {
                label: '第一章内容',
                title: '第一章',
                id: 1
            },
            {
                label: '第一章内容',
                title: '第一章',
                id: 1
            },
            {
                label: '第一章内容',
                title: '第一章',
                id: 1
            },
            {
                label: '第一章内容',
                title: '第一章',
                id: 1
            },
            {
                label: '第一章内容',
                title: '第一章',
                id: 1
            },
            {
                label: '第一章内容',
                title: '第一章',
                id: 1
            },
            {
                label: '第一章内容',
                title: '第一章',
                id: 1
            },
            {
                label: '第一章内容',
                title: '第一章',
                id: 1
            },
            {
                label: '第一章内容',
                title: '第一章',
                id: 1
            }
        ]
    },
    mounted() {
        this.generateTOC()
        this.setupScrollSpy()
    },
    methods: {
        generateTOC() {
            const articleContent = this.$refs.articleContent
            const toc = this.$refs.toc
            const headings = articleContent.querySelectorAll('h1, h2, h3')
            console.log(headings, 'headings')
            let tocHTML = '<ul>'
            headings.forEach((heading) => {
                const id = heading.id
                const text = heading.textContent
                const level = heading.tagName.toLowerCase()
                tocHTML += `
            <li class="toc-item toc-item-${level}">
              <a href="#${id}">${text}</a>
            </li>
          `
            })
            tocHTML += '</ul>'
            toc.innerHTML = tocHTML
        },
        setupScrollSpy() {
            const headings = this.$refs.articleContent.querySelectorAll('h1, h2, h3')
            const tocItems = this.$refs.toc.querySelectorAll('.toc-item')

            window.addEventListener('scroll', () => {
                let currentHeading = null

                headings.forEach((heading) => {
                    const rect = heading.getBoundingClientRect()
                    if (rect.top <= 100) {
                        currentHeading = heading
                    }
                })

                tocItems.forEach((item) => {
                    item.classList.remove('active')
                })

                if (currentHeading) {
                    const activeTocItem = this.$refs.toc.querySelector(
                        `a[href="#${currentHeading.id}"]`
                    ).parentElement
                    activeTocItem.classList.add('active')
                }
            })
        }
    }
}
</script>

<style>
.article-container {
    display: flex;
}

.article-content {
    flex: 1;
    padding-right: 20px;
}

.toc {
    width: 250px;
    position: sticky;
    top: 20px;
    max-height: 100vh;
    overflow-y: auto;
}

.toc ul {
    list-style: none;
    padding: 0;
}

.toc-item {
    margin: 5px 0;
}

.toc-item a {
    text-decoration: none;
    color: #333;
}

.toc-item a:hover {
    color: #007bff;
}

.toc-item.active a {
    color: #007bff;
    font-weight: bold;
}
</style>
