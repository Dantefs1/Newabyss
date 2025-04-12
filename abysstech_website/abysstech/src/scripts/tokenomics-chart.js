// 代币分配饼状图功能
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否存在图表容器
    const chartContainer = document.getElementById('tokenomics-chart');
    if (!chartContainer) return;
    
    // 获取当前语言
    const currentLang = localStorage.getItem('abysstech-language') || 'en';
    
    // 加载语言内容
    fetch(`/content/${currentLang}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load language file');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error loading language file:', error);
            return fetch('/content/en.json').then(response => response.json());
        })
        .then(content => {
            // 获取代币分配数据
            const tokenDistribution = content.tokenomics.distribution.categories;
            
            // 提取数据用于图表
            const labels = tokenDistribution.map(category => category.name);
            const data = tokenDistribution.map(category => category.percentage);
            
            // 定义图表颜色
            const colors = [
                '#00FFFF', // 青色
                '#FF00FF', // 品红色
                '#00FF00', // 亮绿色
                '#FFFF00', // 黄色
                '#FF7F00', // 橙色
                '#6A5ACD'  // 板岩蓝
            ];
            
            // 创建图表
            const ctx = chartContainer.getContext('2d');
            
            // 检查是否已存在Chart对象
            if (window.tokenomicsChart) {
                window.tokenomicsChart.destroy();
            }
            
            window.tokenomicsChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: colors,
                        borderColor: '#121212',
                        borderWidth: 2,
                        hoverOffset: 15
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: {
                                color: '#ffffff',
                                font: {
                                    size: 14
                                },
                                padding: 20
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.raw || 0;
                                    return `${label}: ${value}%`;
                                }
                            }
                        }
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                    cutout: '60%'
                }
            });
        });
});
