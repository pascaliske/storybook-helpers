import type { StoryFn, OptionsParameter } from '@storybook/addons'

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Explicitly export types for type inference.
 */
export type { StoryFn, OptionsParameter }

/**
 * Interface defining a typed {@link StoryFactory}.
 */
export interface StoryFactory<C = any> {
    component?: new (...args: any[]) => C
    props: Partial<Record<keyof C, any>>
}

/**
 * Interface defining a typed {@link Story}.
 */
export interface Story<T> {
    factory: StoryFn<StoryFactory<T>>
    options?: OptionsParameter
    parameters?: Record<string, any>
}

/**
 * Story object creator function.
 *
 * @param story {@link Story} setup object containing a {@link StoryFactory} for the component.
 * @returns Returns a prepared {@link StoryFn} ready to be consumed by Storybook.
 */
export function createStory<T>({ factory, ...story }: Story<T>): StoryFn<StoryFactory<T>> {
    // eslint-disable-next-line dot-notation, no-sequences
    return (factory['story'] = story), factory
}
