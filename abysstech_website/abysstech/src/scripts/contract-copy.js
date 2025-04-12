// 代币合约地址复制功能
document.addEventListener('DOMContentLoaded', function() {
    const contractCopyButton = document.getElementById('copy-contract');
    const contractAddress = document.getElementById('contract-address');
    
    if (contractCopyButton && contractAddress) {
        contractCopyButton.addEventListener('click', async function() {
            try {
                // 获取合约地址文本
                const address = contractAddress.textContent;
                
                // 复制到剪贴板
                await navigator.clipboard.writeText(address);
                
                // 获取当前语言的复制成功文本
                const currentLang = localStorage.getItem('abysstech-language') || 'en';
                let response;
                
                try {
                    response = await fetch(`/content/${currentLang}.json`);
                    if (!response.ok) {
                        throw new Error('Failed to load language file');
                    }
                } catch (error) {
                    // 如果加载失败，使用英文
                    response = await fetch('/content/en.json');
                }
                
                const content = await response.json();
                const copiedText = content.tokenomics.copiedText;
                
                // 显示复制成功提示
                const originalText = contractCopyButton.textContent;
                contractCopyButton.textContent = copiedText;
                
                // 2秒后恢复原始文本
                setTimeout(() => {
                    contractCopyButton.textContent = originalText;
                }, 2000);
            } catch (error) {
                console.error('Failed to copy contract address:', error);
            }
        });
    }
});
