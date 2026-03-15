import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        page.on('pageerror', lambda error: print(f"Page error: {error}"))
        page.on('console', lambda msg: print(f"Console log ({msg.type}): {msg.text}"))
        try:
            await page.goto('http://localhost:9000/')
            await page.wait_for_selector('h1', timeout=3000)
            await page.screenshot(path='screenshot-broken.png')
        except Exception as e:
            print(f"Exception: {e}")
        finally:
            await browser.close()

if __name__ == '__main__':
    asyncio.run(run())
