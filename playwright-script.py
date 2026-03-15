import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto('http://localhost:9000/')
        await page.wait_for_selector('h1')
        await page.screenshot(path='screenshot.png')
        await browser.close()

if __name__ == '__main__':
    asyncio.run(run())
