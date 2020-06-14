import expect from 'expect'
import { createStory, Story } from '../src'

class DemoComponent {}

const mockStory = (): Story<DemoComponent> => ({
    factory: () => ({ component: DemoComponent, props: {} }),
})

test('createStory: returns a story object', async () => {
    const { factory, ...story } = mockStory()

    const expected = ((factory['story'] = story), factory)
    const result = createStory({ factory, ...story })

    expect(result).toBe(expected)
})
