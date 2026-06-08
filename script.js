// 模拟数据
const destinations = [
    {
        id: 1,
        name: '巴厘岛',
        country: '印度尼西亚',
        image: 'images/bali.jpg',
        description: '巴厘岛是印度尼西亚最著名的旅游胜地，以其美丽的海滩、壮观的火山和丰富的文化遗产而闻名。',
        rating: 4.8,
        reviews: 2345,
        price: 5999,
        category: 'beach',
        tags: ['海滩', '浪漫', '度假'],
        lat: -8.3405,
        lng: 115.0920,
        visitors: 120000,
        bestTime: '4月-10月',
        duration: '5-7天'
    },
    {
        id: 2,
        name: '东京',
        country: '日本',
        image: 'images/tokyo.jpg',
        description: '东京是日本的首都，融合了传统与现代，拥有世界一流的美食、购物和文化体验。',
        rating: 4.9,
        reviews: 3567,
        price: 6999,
        category: 'city',
        tags: ['都市', '美食', '文化'],
        lat: 35.6762,
        lng: 139.6503,
        visitors: 250000,
        bestTime: '3月-5月, 10月-11月',
        duration: '4-6天'
    },
    {
        id: 3,
        name: '瑞士阿尔卑斯',
        country: '瑞士',
        image: 'images/swiss.jpg',
        description: '瑞士阿尔卑斯山脉是世界著名的滑雪胜地，夏季则是徒步和登山的天堂。',
        rating: 4.7,
        reviews: 1890,
        price: 8999,
        category: 'nature',
        tags: ['雪山', '滑雪', '徒步'],
        lat: 46.8182,
        lng: 8.2275,
        visitors: 80000,
        bestTime: '12月-3月(滑雪), 6月-9月(徒步)',
        duration: '7-10天'
    },
    {
        id: 4,
        name: '马尔代夫',
        country: '马尔代夫',
        image: 'images/maldives.jpg',
        description: '马尔代夫由1200多个珊瑚岛组成，拥有世界上最美丽的海滩和水上别墅。',
        rating: 4.9,
        reviews: 4123,
        price: 12999,
        category: 'beach',
        tags: ['海岛', '蜜月', '潜水'],
        lat: 3.2028,
        lng: 73.2207,
        visitors: 60000,
        bestTime: '11月-4月',
        duration: '5-7天'
    },
    {
        id: 5,
        name: '巴黎',
        country: '法国',
        image: 'images/paris.jpg',
        description: '巴黎是浪漫之都，拥有埃菲尔铁塔、卢浮宫等世界著名景点，是艺术和时尚的中心。',
        rating: 4.8,
        reviews: 5678,
        price: 9999,
        category: 'city',
        tags: ['浪漫', '艺术', '美食'],
        lat: 48.8566,
        lng: 2.3522,
        visitors: 300000,
        bestTime: '4月-6月, 9月-11月',
        duration: '5-7天'
    },
    {
        id: 6,
        name: '张家界',
        country: '中国',
        image: 'images/zhangjiajie.jpg',
        description: '张家界以其独特的石英砂岩峰林地貌而闻名，是电影《阿凡达》的取景地。',
        rating: 4.7,
        reviews: 2890,
        price: 2999,
        category: 'nature',
        tags: ['山水', '徒步', '摄影'],
        lat: 29.1128,
        lng: 110.4716,
        visitors: 180000,
        bestTime: '4月-6月, 9月-11月',
        duration: '3-5天'
    },
    {
        id: 7,
        name: '普吉岛',
        country: '泰国',
        image: 'images/phuket.jpg',
        description: '普吉岛是泰国最大的岛屿，拥有美丽的海滩、清澈的海水和丰富的夜生活。',
        rating: 4.6,
        reviews: 3456,
        price: 4999,
        category: 'beach',
        tags: ['海滩', '美食', '潜水'],
        lat: 7.8731,
        lng: 98.3923,
        visitors: 150000,
        bestTime: '11月-4月',
        duration: '5-7天'
    },
    {
        id: 8,
        name: '罗马',
        country: '意大利',
        image: 'images/rome.jpg',
        description: '罗马是古罗马文明的发源地，拥有斗兽场、梵蒂冈等世界文化遗产。',
        rating: 4.8,
        reviews: 4567,
        price: 8999,
        category: 'city',
        tags: ['历史', '艺术', '美食'],
        lat: 41.9028,
        lng: 12.4964,
        visitors: 280000,
        bestTime: '4月-6月, 9月-11月',
        duration: '5-7天'
    },
    {
        id: 9,
        name: '九寨沟',
        country: '中国',
        image: 'images/jiuzhaigou.jpg',
        description: '九寨沟以其多彩的湖泊和瀑布而闻名，是中国最美丽的自然保护区之一。',
        rating: 4.8,
        reviews: 2134,
        price: 3999,
        category: 'nature',
        tags: ['山水', '湖泊', '摄影'],
        lat: 33.1425,
        lng: 103.9653,
        visitors: 120000,
        bestTime: '9月-10月',
        duration: '3-4天'
    },
    {
        id: 10,
        name: '悉尼',
        country: '澳大利亚',
        image: 'images/sydney.jpg',
        description: '悉尼是澳大利亚最大的城市，拥有悉尼歌剧院、邦迪海滩等著名景点。',
        rating: 4.7,
        reviews: 3789,
        price: 11999,
        category: 'city',
        tags: ['都市', '海滩', '自然'],
        lat: -33.8688,
        lng: 151.2093,
        visitors: 200000,
        bestTime: '9月-11月, 3月-5月',
        duration: '6-8天'
    },
    {
        id: 11,
        name: '三亚',
        country: '中国',
        image: 'images/sanya.jpg',
        description: '三亚是中国最南端的热带海滨城市，拥有美丽的海滩和温暖的气候。',
        rating: 4.5,
        reviews: 4234,
        price: 3599,
        category: 'beach',
        tags: ['海滩', '度假', '亲子'],
        lat: 18.2208,
        lng: 109.5089,
        visitors: 350000,
        bestTime: '10月-3月',
        duration: '4-6天'
    },
    {
        id: 12,
        name: '挪威峡湾',
        country: '挪威',
        image: 'images/norway.jpg',
        description: '挪威峡湾以其壮观的自然景观而闻名，是世界自然遗产。',
        rating: 4.9,
        reviews: 1234,
        price: 13999,
        category: 'nature',
        tags: ['自然', '峡湾', '摄影'],
        lat: 60.4720,
        lng: 5.4022,
        visitors: 50000,
        bestTime: '5月-9月',
        duration: '7-10天'
    }
];

const categories = [
    { id: 'all', name: '全部', icon: 'fas fa-globe' },
    { id: 'beach', name: '海滩', icon: 'fas fa-umbrella-beach' },
    { id: 'city', name: '都市', icon: 'fas fa-building' },
    { id: 'nature', name: '自然', icon: 'fas fa-mountain' }
];

const hotDestinations = [
    {
        id: 1,
        name: '马尔代夫',
        subtitle: '梦幻海岛之旅',
        image: 'images/hot-maldives.jpg',
        price: 12999
    },
    {
        id: 2,
        name: '瑞士',
        subtitle: '阿尔卑斯雪山之旅',
        image: 'images/hot-swiss.jpg',
        price: 8999
    },
    {
        id: 3,
        name: '东京',
        subtitle: '樱花季限定',
        image: 'images/hot-tokyo.jpg',
        price: 6999
    },
    {
        id: 4,
        name: '巴厘岛',
        subtitle: '浪漫蜜月首选',
        image: 'images/hot-bali.jpg',
        price: 5999
    }
];

// 生成随机日期
function randomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

// 用户名模板
const userNames = ['旅行者小王', '旅游达人', '摄影爱好者', '家庭出游', '背包客小李', '美食探险家', '风景摄影师', '旅行作家', '户外爱好者', '文化探索者', '自驾游玩家', '亲子游专家', '蜜月旅行者', '商务出差族', '周末短途游', '深度游爱好者', '自由行达人', '跟团游体验者', '海岛控', '雪山迷'];

// 评价内容模板
const reviewContents = [
    '非常棒的旅行体验！风景如画，服务周到，下次还会再来。',
    '整体不错，就是旺季人有点多，建议错峰出行。',
    '拍照圣地！每个角度都是大片，强烈推荐给喜欢摄影的朋友。',
    '适合带孩子来，有很多亲子活动，孩子玩得很开心。',
    '住宿条件很好，交通便利，周边美食很多。',
    '导游很专业，讲解详细，行程安排合理。',
    '超出预期！值得一去的好地方，推荐给大家。',
    '性价比很高，花小钱办大事，玩得很开心。',
    '自然风光很美，空气清新，放松身心的好地方。',
    '人文历史丰富，学到了很多知识，收获满满。',
    '美食太多了，每顿都吃得很满足，减肥计划又失败了。',
    '购物体验很好，买了很多当地特产，价格实惠。',
    '天气很好，拍照效果绝佳，发朋友圈获赞无数。',
    '和家人一起出游，留下了美好的回忆，期待下次再来。',
    '行程安排紧凑但不累，每个景点都很精彩。',
    '酒店位置很好，出门就是景点，非常方便。',
    '服务态度很好，有问必答，解决问题很及时。',
    '风景太美了，简直像画一样，舍不得离开。',
    '当地人民很热情，感受到了浓浓的人情味。',
    '交通很方便，公共交通发达，自由行毫无压力。'
];

// 为每个目的地生成20条评价
function generateReviews(destinationId) {
    const reviews = [];
    for (let i = 1; i <= 20; i++) {
        reviews.push({
            id: `${destinationId}-${i}`,
            userName: userNames[Math.floor(Math.random() * userNames.length)],
            rating: Math.floor(Math.random() * 5) + 1,
            content: reviewContents[Math.floor(Math.random() * reviewContents.length)],
            date: randomDate(new Date(2023, 0, 1), new Date())
        });
    }
    return reviews;
}

// 用户系统
let currentUser = null;
let users = []; // 用户数据库

// 收藏列表（未登录时使用）
let favorites = [];

// DOM元素
const navLinks = document.getElementById('navLinks');
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchClose = document.getElementById('searchClose');
const searchResults = document.getElementById('searchResults');
const userBtn = document.getElementById('userBtn');
const loginOverlay = document.getElementById('loginOverlay');
const loginClose = document.getElementById('loginClose');
const loginForm = document.getElementById('loginForm');
const registerBtn = document.getElementById('registerBtn');
const registerOverlay = document.getElementById('registerOverlay');
const registerClose = document.getElementById('registerClose');
const registerForm = document.getElementById('registerForm');
const backToLogin = document.getElementById('backToLogin');
const profileOverlay = document.getElementById('profileOverlay');
const profileClose = document.getElementById('profileClose');
const profileContent = document.getElementById('profileContent');
const menuToggle = document.getElementById('menuToggle');
const categoryGrid = document.getElementById('categoryGrid');
const carouselTrack = document.getElementById('carouselTrack');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carouselIndicators = document.getElementById('carouselIndicators');
const destinationsGrid = document.getElementById('destinationsGrid');
const gridView = document.getElementById('gridView');
const listView = document.getElementById('listView');
const loadMore = document.getElementById('loadMore');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

// 地图相关DOM元素
const mapOverlay = document.getElementById('mapOverlay');
const mapClose = document.getElementById('mapClose');
const mapContainer = document.getElementById('mapContainer');
const mapTitle = document.getElementById('mapTitle');

// 当前状态
let currentCategory = 'all';
let currentPage = 1;
const itemsPerPage = 8;
let currentCarouselIndex = 0;
let currentView = 'grid';

// 防抖函数
function debounce(func, delay = 300) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderCarousel();
    renderDestinations();
    initSearch();
});

// 初始化搜索功能
function initSearch() {
    // 打开搜索覆盖层
    searchBtn.addEventListener('click', () => {
        searchOverlay.style.display = 'block';
        searchInput.focus();
    });

    // 关闭搜索覆盖层
    searchClose.addEventListener('click', () => {
        searchOverlay.style.display = 'none';
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    // 点击搜索覆盖层外部关闭
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.style.display = 'none';
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });

    // 搜索输入事件（防抖）
    searchInput.addEventListener('input', debounce((e) => {
        const keyword = e.target.value.trim();
        if (keyword.length > 0) {
            performSearch(keyword);
        } else {
            searchResults.innerHTML = '';
        }
    }, 200));

    // ESC键关闭搜索
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.style.display === 'block') {
            searchOverlay.style.display = 'none';
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });
}

// 执行搜索
function performSearch(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    
    // 搜索目的地
    const results = destinations.filter(dest => 
        dest.name.toLowerCase().includes(lowerKeyword) ||
        dest.country.toLowerCase().includes(lowerKeyword) ||
        dest.description.toLowerCase().includes(lowerKeyword) ||
        dest.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
    );

    if (results.length > 0) {
        renderSearchResults(results);
    } else {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search"></i>
                <p>未找到包含 "${keyword}" 的目的地</p>
            </div>
        `;
    }
}

// 渲染搜索结果
function renderSearchResults(results) {
    searchResults.innerHTML = results.map(dest => `
        <div class="search-result-item" data-id="${dest.id}">
            <img src="${dest.image}" alt="${dest.name}">
            <div class="search-result-info">
                <h4>${dest.name}</h4>
                <p>${dest.country} - ¥${dest.price}/人起</p>
                <div class="search-tags">
                    ${dest.tags.slice(0, 3).map(tag => `<span class="search-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// 搜索结果点击事件（事件委托）
searchResults.addEventListener('click', (e) => {
    const item = e.target.closest('.search-result-item');
    if (item) {
        const id = parseInt(item.dataset.id);
        searchOverlay.style.display = 'none';
        searchInput.value = '';
        searchResults.innerHTML = '';
        
        // 跳转到目的地区域
        document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
        
        // 延迟后高亮显示对应的卡片
        setTimeout(() => {
            highlightDestinationCard(id);
        }, 500);
    }
});

// 高亮显示目的地卡片
function highlightDestinationCard(id) {
    const card = document.querySelector(`.destination-card[data-id="${id}"]`);
    if (card) {
        // 添加高亮动画
        card.style.boxShadow = '0 0 0 3px #3498db, 0 15px 40px rgba(52, 152, 219, 0.4)';
        card.style.transform = 'translateY(-10px)';
        
        // 滚动到卡片位置
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // 3秒后移除高亮
        setTimeout(() => {
            card.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            card.style.transform = '';
        }, 3000);
    }
}

// 渲染分类
function renderCategories() {
    categoryGrid.innerHTML = categories.map(cat => `
        <div class="category-item ${currentCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
            <i class="${cat.icon}"></i>
            <span>${cat.name}</span>
        </div>
    `).join('');
}

// 分类点击事件（使用事件委托，避免重复绑定）
categoryGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.category-item');
    if (item) {
        currentCategory = item.dataset.category;
        currentPage = 1;
        document.querySelectorAll('.category-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        renderDestinations();
        // 跳转到目的地区域
        document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
    }
});

// 渲染轮播图
function renderCarousel() {
    carouselTrack.innerHTML = hotDestinations.map(item => `
        <div class="carousel-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="carousel-caption">
                <h3>${item.name}</h3>
                <p>${item.subtitle}</p>
                <button onclick="openDestinationDetail(${item.id})">立即预订</button>
            </div>
        </div>
    `).join('');

    // 渲染指示器
    carouselIndicators.innerHTML = hotDestinations.map((_, index) => `
        <button class="carousel-indicator ${index === currentCarouselIndex ? 'active' : ''}" data-index="${index}"></button>
    `).join('');
}

// 轮播图指示器点击事件（事件委托）
carouselIndicators.addEventListener('click', (e) => {
    const indicator = e.target.closest('.carousel-indicator');
    if (indicator) {
        currentCarouselIndex = parseInt(indicator.dataset.index);
        updateCarousel();
    }
});

// 更新轮播图
function updateCarousel() {
    const trackWidth = carouselTrack.offsetWidth;
    carouselTrack.style.transform = `translateX(-${currentCarouselIndex * trackWidth}px)`;
    
    // 更新指示器
    document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentCarouselIndex);
    });
}

// 轮播图导航
carouselPrev.addEventListener('click', () => {
    currentCarouselIndex = currentCarouselIndex === 0 ? hotDestinations.length - 1 : currentCarouselIndex - 1;
    updateCarousel();
});

carouselNext.addEventListener('click', () => {
    currentCarouselIndex = currentCarouselIndex === hotDestinations.length - 1 ? 0 : currentCarouselIndex + 1;
    updateCarousel();
});

// 自动轮播
setInterval(() => {
    currentCarouselIndex = currentCarouselIndex === hotDestinations.length - 1 ? 0 : currentCarouselIndex + 1;
    updateCarousel();
}, 5000);

// 获取当前收藏列表
function getCurrentFavorites() {
    return currentUser ? currentUser.favorites : favorites;
}

// 渲染目的地卡片
function renderDestinations() {
    let filteredDestinations = destinations;
    
    if (currentCategory !== 'all') {
        filteredDestinations = destinations.filter(d => d.category === currentCategory);
    }
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayDestinations = filteredDestinations.slice(startIndex, endIndex);
    
    // 获取当前用户的收藏列表
    const currentFavorites = getCurrentFavorites();
    
    destinationsGrid.innerHTML = displayDestinations.map(dest => `
        <div class="destination-card" data-id="${dest.id}" style="position: relative;">
            <img src="${dest.image}" alt="${dest.name}">
            <button class="favorite-btn ${currentFavorites.includes(dest.id) ? 'favorited' : ''}" 
                    onclick="toggleFavorite(event, ${dest.id})">
                <i class="fas fa-heart"></i>
            </button>
            <button class="map-btn" onclick="openMapModal(${dest.id}, event)">
                <i class="fas fa-map"></i>
            </button>
            <div class="destination-info">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
                <div class="destination-meta">
                    <span class="location"><i class="fas fa-map-marker-alt"></i>${dest.country}</span>
                    <span class="rating"><i class="fas fa-star"></i>${dest.rating}</span>
                </div>
                <div class="destination-meta">
                    <span class="price">¥${dest.price}/人起</span>
                    <span class="review-count" style="color: #999; font-size: 0.85rem; cursor: pointer; text-decoration: underline;" onclick="openDestinationDetailWithReview(${dest.id}, event)">${dest.reviews}条评价</span>
                </div>
            </div>
        </div>
    `).join('');

    // 显示/隐藏加载更多按钮
    loadMore.style.display = endIndex >= filteredDestinations.length ? 'none' : 'block';
}

// 目的地卡片点击事件（事件委托）
destinationsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.destination-card');
    if (card && !e.target.closest('.favorite-btn')) {
        const id = parseInt(card.dataset.id);
        openDestinationDetail(id);
    }
});

// 加载更多
loadMore.addEventListener('click', () => {
    currentPage++;
    renderDestinations();
});

// 视图切换
gridView.addEventListener('click', () => {
    currentView = 'grid';
    gridView.classList.add('active');
    listView.classList.remove('active');
    destinationsGrid.classList.remove('list-view');
});

listView.addEventListener('click', () => {
    currentView = 'list';
    listView.classList.add('active');
    gridView.classList.remove('active');
    destinationsGrid.classList.add('list-view');
});

// 生成评价内容
function generateReviews(destinationId) {
    const adjectives = ['美丽', '壮观', '迷人', '令人难忘', '精彩', '舒适', '愉快', '完美', '惊喜', '惊艳'];
    const nouns = ['风景', '体验', '服务', '美食', '住宿', '景点', '行程', '导游', '天气', '环境'];
    const users = ['旅行者', '游客', '背包客', '摄影师', '美食家', '家庭出游', '情侣', '独自旅行'];
    const reviews = [];
    
    for (let i = 1; i <= 20; i++) {
        const userName = users[Math.floor(Math.random() * users.length)] + Math.floor(Math.random() * 1000);
        const rating = Math.floor(Math.random() * 2) + 4; // 4 or 5 stars
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        const content = `${adj}的${noun}，非常推荐！${rating === 5 ? '绝对值得再来一次！' : '整体体验不错，有些小细节可以改进。'}`;
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 30));
        
        reviews.push({
            id: i,
            userName: userName,
            rating: rating,
            content: content,
            date: date.toISOString().split('T')[0]
        });
    }
    
    return reviews;
}

// 打开详情弹窗
function openDestinationDetail(id, scrollToReviews = false) {
    const destination = destinations.find(d => d.id === id);
    if (!destination) return;

    // 为该目的地生成20条评价
    const destinationReviews = generateReviews(id);

    // 获取当前用户的收藏状态
    const currentFavorites = getCurrentFavorites();
    const isFavorited = currentFavorites.includes(id);

    modalContent.innerHTML = `
        <div class="modal-header">
            <img src="${destination.image}" alt="${destination.name}">
            <div class="modal-header-overlay">
                <h2>${destination.name}</h2>
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${destination.country}</span>
                </div>
                <div class="tags">
                    ${destination.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="modal-body">
            <div class="modal-stats">
                <div class="stat-item">
                    <div class="stat-value">${destination.rating}</div>
                    <div class="stat-label">评分</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${destinationReviews.length}</div>
                    <div class="stat-label">评价数</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${(destination.visitors / 1000).toFixed(0)}K</div>
                    <div class="stat-label">游客数</div>
                </div>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-info-circle"></i>目的地介绍</h3>
                <p>${destination.description}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-calendar"></i>最佳旅行时间</h3>
                <p>${destination.bestTime}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-clock"></i>建议游玩时长</h3>
                <p>${destination.duration}</p>
            </div>
            <div class="modal-section" id="reviewsSection">
                <h3><i class="fas fa-comments"></i>用户评价 (${destinationReviews.length})</h3>
                <div class="reviews-container">
                    ${destinationReviews.map(review => `
                        <div class="review-item">
                            <div class="review-header">
                                <div class="review-avatar">${review.userName.charAt(0)}</div>
                                <div class="review-info">
                                    <h4>${review.userName}</h4>
                                    <div class="review-rating">
                                        ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                                    </div>
                                </div>
                            </div>
                            <div class="review-content">${review.content}</div>
                            <div class="review-date">${review.date}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="modal-actions">
                <button class="btn-secondary" onclick="toggleFavoriteFromModal(${destination.id})">
                    <i class="fas fa-heart"></i>
                    ${isFavorited ? '已收藏' : '收藏'}
                </button>
                <button class="btn-primary" onclick="bookDestinationFromModal(${destination.id})">立即预订</button>
            </div>
        </div>
    `;

    modalOverlay.classList.add('active');

    // 如果需要滚动到评论区域
    if (scrollToReviews) {
        setTimeout(() => {
            const reviewsSection = document.getElementById('reviewsSection');
            if (reviewsSection) {
                reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    }
}

// 打开详情弹窗并跳转到评论区域
function openDestinationDetailWithReview(id, e) {
    e.stopPropagation();
    openDestinationDetail(id, true);
}

// 关闭弹窗
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// 收藏功能
function toggleFavorite(e, id) {
    e.stopPropagation();
    
    // 如果未登录，提示登录
    if (!currentUser) {
        loginOverlay.style.display = 'flex';
        return;
    }
    
    const userFavorites = currentUser.favorites;
    const index = userFavorites.indexOf(id);
    if (index === -1) {
        userFavorites.push(id);
        alert('已添加到收藏');
    } else {
        userFavorites.splice(index, 1);
        alert('已从收藏移除');
    }
    e.target.closest('.favorite-btn').classList.toggle('favorited');
    
    // 如果个人中心已打开，更新收藏列表
    if (profileOverlay.classList.contains('active')) {
        renderProfile();
    }
}

function toggleFavoriteFromModal(id) {
    // 如果未登录，提示登录
    if (!currentUser) {
        loginOverlay.style.display = 'flex';
        return;
    }
    
    const userFavorites = currentUser.favorites;
    const index = userFavorites.indexOf(id);
    if (index === -1) {
        userFavorites.push(id);
        alert('已添加到收藏');
    } else {
        userFavorites.splice(index, 1);
        alert('已从收藏移除');
    }
    // 重新渲染目的地列表以更新收藏状态
    renderDestinations();
    // 如果个人中心已打开，更新收藏列表
    if (profileOverlay.classList.contains('active')) {
        renderProfile();
    }
}

// 从详情弹窗预订
function bookDestinationFromModal(id) {
    bookDestination(id);
}

// 预订功能
function bookDestination(id) {
    // 如果未登录，提示登录
    if (!currentUser) {
        loginOverlay.style.display = 'flex';
        return;
    }
    
    const destination = destinations.find(d => d.id === id);
    if (!destination) return;
    
    const bookingId = 'BK' + String(Date.now()).slice(-5);
    const booking = {
        id: bookingId,
        destinationId: destination.id,
        destinationName: destination.name,
        destinationImage: destination.image,
        destinationCountry: destination.country,
        price: destination.price,
        date: getNextMonthDate(),
        status: 'pending',
        guests: 2
    };
    
    currentUser.bookings.push(booking);
    alert('预订成功！您的订单号是：' + bookingId);
    modalOverlay.classList.remove('active');
    
    // 如果个人中心已打开，更新预订列表
    if (profileOverlay.classList.contains('active')) {
        renderProfile();
    }
}

// 获取下个月的日期
function getNextMonthDate() {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toISOString().split('T')[0];
}

// 验证手机号
function validatePhone(phone) {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phone);
}

// 用户按钮点击事件
userBtn.addEventListener('click', () => {
    if (currentUser) {
        // 已登录，打开个人中心
        renderProfile();
        profileOverlay.classList.add('active');
    } else {
        // 未登录，打开登录弹窗
        loginOverlay.style.display = 'flex';
    }
});

// 登录弹窗关闭
loginClose.addEventListener('click', () => {
    loginOverlay.style.display = 'none';
});

loginOverlay.addEventListener('click', (e) => {
    if (e.target === loginOverlay) {
        loginOverlay.style.display = 'none';
    }
});

// 注册弹窗关闭
registerClose.addEventListener('click', () => {
    registerOverlay.style.display = 'none';
});

registerOverlay.addEventListener('click', (e) => {
    if (e.target === registerOverlay) {
        registerOverlay.style.display = 'none';
    }
});

// 个人中心弹窗关闭
profileClose.addEventListener('click', () => {
    profileOverlay.classList.remove('active');
});

profileOverlay.addEventListener('click', (e) => {
    if (e.target === profileOverlay) {
        profileOverlay.classList.remove('active');
    }
});

// 切换到注册
registerBtn.addEventListener('click', () => {
    loginOverlay.style.display = 'none';
    registerOverlay.style.display = 'flex';
});

// 返回登录
backToLogin.addEventListener('click', () => {
    registerOverlay.style.display = 'none';
    loginOverlay.style.display = 'flex';
});

// 登录表单提交
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const phone = document.getElementById('loginPhone').value;
    const password = document.getElementById('loginPassword').value;
    
    // 验证手机号
    if (!validatePhone(phone)) {
        document.getElementById('loginPhoneError').textContent = '请输入有效的11位手机号';
        return;
    }
    document.getElementById('loginPhoneError').textContent = '';
    
    const user = users.find(u => u.phone === phone && u.password === password);
    
    if (user) {
        currentUser = user;
        loginOverlay.style.display = 'none';
        loginForm.reset();
        alert('登录成功！');
        // 更新目的地卡片的收藏状态
        renderDestinations();
    } else {
        document.getElementById('loginPasswordError').textContent = '手机号或密码错误';
    }
});

// 注册表单提交
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nickname = document.getElementById('registerNickname').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // 验证昵称
    if (!nickname || nickname.length < 2) {
        document.getElementById('registerNicknameError').textContent = '昵称至少需要2个字符';
        return;
    }
    document.getElementById('registerNicknameError').textContent = '';
    
    // 验证手机号
    if (!validatePhone(phone)) {
        document.getElementById('registerPhoneError').textContent = '请输入有效的11位手机号';
        return;
    }
    document.getElementById('registerPhoneError').textContent = '';
    
    // 验证密码
    if (!password || password.length < 6) {
        document.getElementById('registerPasswordError').textContent = '密码至少需要6个字符';
        return;
    }
    document.getElementById('registerPasswordError').textContent = '';
    
    // 验证确认密码
    if (password !== confirmPassword) {
        document.getElementById('registerConfirmPasswordError').textContent = '两次输入的密码不一致';
        return;
    }
    document.getElementById('registerConfirmPasswordError').textContent = '';
    
    // 验证手机号是否已注册
    const existingUser = users.find(u => u.phone === phone);
    if (existingUser) {
        document.getElementById('registerPhoneError').textContent = '该手机号已被注册';
        return;
    }
    
    // 创建新用户
    const newUser = {
        id: users.length + 1,
        nickname: nickname,
        phone: phone,
        password: password,
        favorites: [],
        bookings: []
    };
    
    users.push(newUser);
    currentUser = newUser;
    registerOverlay.style.display = 'none';
    registerForm.reset();
    alert('注册成功！');
});

// 渲染个人中心
function renderProfile() {
    if (!currentUser) return;
    
    const userFavorites = currentUser.favorites;
    const userBookings = currentUser.bookings;
    
    const favoriteDestinations = destinations.filter(d => userFavorites.includes(d.id));
    
    profileContent.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">${currentUser.nickname.charAt(0)}</div>
            <div class="profile-info">
                <h2 id="profileNickname">${currentUser.nickname} <button class="edit-nickname-btn" onclick="editNickname()"><i class="fas fa-edit"></i> 编辑</button></h2>
                <p><i class="fas fa-phone"></i> ${currentUser.phone}</p>
            </div>
        </div>
        
        <div class="profile-tabs">
            <button class="profile-tab active" data-tab="favorites">
                <i class="fas fa-heart"></i> 收藏 (${favoriteDestinations.length})
            </button>
            <button class="profile-tab" data-tab="bookings">
                <i class="fas fa-calendar"></i> 预订 (${userBookings.length})
            </button>
        </div>
        
        <!-- 收藏列表 -->
        <div class="profile-section active" id="favoritesSection">
            ${favoriteDestinations.length > 0 ? `
                <div class="favorites-list">
                    ${favoriteDestinations.map(dest => `
                        <div class="favorite-item">
                            <img src="${dest.image}" alt="${dest.name}">
                            <div class="favorite-info">
                                <div>
                                    <h3>${dest.name}</h3>
                                    <p>${dest.country} - ¥${dest.price}/人起</p>
                                </div>
                                <div class="favorite-actions">
                                    <button class="btn-remove" onclick="removeFavorite(${dest.id})">取消收藏</button>
                                    <button class="btn-view" onclick="viewDestinationFromProfile(${dest.id})">查看详情</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="profile-empty">
                    <i class="fas fa-heart"></i>
                    <p>暂无收藏的目的地</p>
                    <p style="font-size: 0.9rem;">去发现您心仪的目的地吧！</p>
                </div>
            `}
        </div>
        
        <!-- 预订列表 -->
        <div class="profile-section" id="bookingsSection">
            ${userBookings.length > 0 ? `
                <div class="bookings-list">
                    ${userBookings.map(booking => `
                        <div class="booking-item">
                            <img src="${booking.destinationImage}" alt="${booking.destinationName}">
                            <div class="booking-info">
                                <div>
                                    <h3>${booking.destinationName}</h3>
                                    <p>${booking.destinationCountry}</p>
                                    <span class="booking-status status-${booking.status}">${getStatusText(booking.status)}</span>
                                </div>
                                <div>
                                    <p>订单号：${booking.id}</p>
                                    <p>出行日期：${booking.date}</p>
                                    <p>价格：¥${booking.price} x ${booking.guests}人</p>
                                    <div class="booking-actions">
                                        <button class="btn-view" onclick="viewDestinationFromProfile(${booking.destinationId})">查看目的地</button>
                                        ${booking.status === 'pending' ? `
                                            <button class="btn-cancel" onclick="cancelBooking('${booking.id}')">取消预订</button>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="profile-empty">
                    <i class="fas fa-calendar"></i>
                    <p>暂无预订记录</p>
                    <p style="font-size: 0.9rem;">去预订您的下一次旅行吧！</p>
                </div>
            `}
        </div>
        
        <button class="logout-btn" onclick="logout()">退出登录</button>
    `;
    
    // 添加标签切换事件
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.profile-section').forEach(s => s.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tabId + 'Section').classList.add('active');
        });
    });
}

// 获取状态文本
function getStatusText(status) {
    const statusMap = {
        'pending': '待确认',
        'confirmed': '已确认',
        'completed': '已完成',
        'canceled': '已取消'
    };
    return statusMap[status] || status;
}

// 取消收藏
function removeFavorite(id) {
    const index = currentUser.favorites.indexOf(id);
    if (index !== -1) {
        currentUser.favorites.splice(index, 1);
        renderProfile();
        renderDestinations();
        alert('已取消收藏');
    }
}

// 从个人中心查看目的地
function viewDestinationFromProfile(id) {
    profileOverlay.classList.remove('active');
    openDestinationDetail(id);
}

// 取消预订
function cancelBooking(bookingId) {
    const booking = currentUser.bookings.find(b => b.id === bookingId);
    if (booking && booking.status === 'pending') {
        booking.status = 'canceled';
        renderProfile();
        alert('预订已取消');
    }
}

// 编辑昵称
function editNickname() {
    const nicknameElement = document.getElementById('profileNickname');
    const currentNickname = currentUser.nickname;
    
    nicknameElement.innerHTML = `
        <div class="nickname-edit">
            <input type="text" id="editNicknameInput" value="${currentNickname}" maxlength="20">
            <button class="save-btn" onclick="saveNickname()">保存</button>
            <button class="cancel-btn" onclick="cancelEditNickname()">取消</button>
        </div>
    `;
}

// 保存昵称
function saveNickname() {
    const newNickname = document.getElementById('editNicknameInput').value;
    
    if (!newNickname || newNickname.length < 2) {
        alert('昵称至少需要2个字符');
        return;
    }
    
    currentUser.nickname = newNickname;
    renderProfile();
    alert('昵称修改成功！');
}

// 取消编辑昵称
function cancelEditNickname() {
    renderProfile();
}

// 退出登录
function logout() {
    currentUser = null;
    profileOverlay.classList.remove('active');
    renderDestinations();
    alert('已退出登录');
}

// 导航菜单切换
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 滚动到目的地区域
function scrollToDestinations() {
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
}

// 地图相关功能
let map = null;
let markers = [];

// 打开地图弹窗
function openMapModal(destinationId, e) {
    e.stopPropagation();
    
    const destination = destinations.find(d => d.id === destinationId);
    if (!destination) return;
    
    mapTitle.textContent = `${destination.name} - 周边景点`;
    mapOverlay.classList.add('active');
    
    // 延迟初始化地图，确保弹窗已显示
    setTimeout(() => {
        initMap(destinationId);
    }, 100);
}

// 初始化百度地图
function initMap(selectedId) {
    // 清除之前的地图实例
    if (map) {
        map = null;
    }
    
    // 清空标记数组
    markers = [];
    
    // 创建地图实例
    map = new BMap.Map('mapContainer');
    
    // 获取选中的目的地
    const selectedDest = destinations.find(d => d.id === selectedId);
    
    if (selectedDest) {
        // 设置地图中心点为选中的目的地
        const centerPoint = new BMap.Point(selectedDest.lng, selectedDest.lat);
        map.centerAndZoom(centerPoint, 4);
        
        // 添加缩放控件
        map.addControl(new BMap.NavigationControl());
        
        // 添加比例尺控件
        map.addControl(new BMap.ScaleControl());
        
        // 为所有目的地添加标记
        destinations.forEach(dest => {
            const point = new BMap.Point(dest.lng, dest.lat);
            const isSelected = dest.id === selectedId;
            
            // 创建不同颜色的标记
            const marker = new BMap.Marker(point, {
                icon: createMarkerIcon(isSelected)
            });
            
            // 添加标记到地图
            map.addOverlay(marker);
            markers.push(marker);
            
            // 创建信息窗口
            const infoWindow = new BMap.InfoWindow(`
                <div style="padding: 15px; min-width: 200px;">
                    <h4 style="margin-bottom: 10px; color: #2c3e50;">${dest.name}</h4>
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 5px;">${dest.country}</p>
                    <p style="color: #e74c3c; font-weight: 600;">¥${dest.price}/人起</p>
                    <p style="color: #3498db; margin-top: 10px;">评分: ${dest.rating}分</p>
                </div>
            `);
            
            // 点击标记显示信息窗口
            marker.addEventListener('click', () => {
                map.openInfoWindow(infoWindow, point);
            });
            
            // 如果是选中的目的地，自动打开信息窗口
            if (isSelected) {
                setTimeout(() => {
                    map.openInfoWindow(infoWindow, point);
                }, 500);
            }
        });
        
        // 调整视野范围，显示所有标记
        const view = map.getViewport(markers.map(m => m.getPosition()));
        const mapZoom = view.zoom - 1;
        const centerPointNew = view.center;
        map.centerAndZoom(centerPointNew, mapZoom);
    }
}

// 创建自定义标记图标
function createMarkerIcon(isSelected) {
    // 创建不同颜色的标记
    const color = isSelected ? '#e74c3c' : '#3498db';
    const size = isSelected ? new BMapGL.Size(40, 40) : new BMapGL.Size(32, 32);
    
    // 使用canvas生成自定义图标
    const canvas = document.createElement('canvas');
    canvas.width = size.width;
    canvas.height = size.height;
    const ctx = canvas.getContext('2d');
    
    // 绘制圆形背景
    ctx.beginPath();
    ctx.arc(size.width / 2, size.height / 2, size.width / 2 - 4, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // 绘制内部白色圆形
    ctx.beginPath();
    ctx.arc(size.width / 2, size.height / 2, size.width / 2 - 10, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    
    // 绘制中心点
    ctx.beginPath();
    ctx.arc(size.width / 2, size.height / 2, 5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    
    // 绘制底部三角形
    ctx.beginPath();
    ctx.moveTo(size.width / 2 - 8, size.height - 8);
    ctx.lineTo(size.width / 2 + 8, size.height - 8);
    ctx.lineTo(size.width / 2, size.height);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    
    // 创建图标
    const icon = new BMapGL.Icon(canvas.toDataURL(), size);
    icon.setImageSize(size);
    
    return icon;
}

// 关闭地图弹窗
mapClose.addEventListener('click', () => {
    mapOverlay.classList.remove('active');
});

mapOverlay.addEventListener('click', (e) => {
    if (e.target === mapOverlay) {
        mapOverlay.classList.remove('active');
    }
});