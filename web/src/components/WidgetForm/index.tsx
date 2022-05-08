import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from './Steps/FeedbackSuccess';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    ANOTHER: {
        title: 'Outro',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

//Object.entries(feedbackTypes) => 
/**
 * [
 *  [key: 'BUG', value: {...}],
 *  [key: 'IDEA', value: {...}],
 *  [key: 'THOUGHT', value: {...}]
 * ]
 * 
 * The property <button key={key}> is used to help React identify each element of the array in case 
 * some change occurs 
 */

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleFeedbackRestart() {
        setFeedbackSent(false); 
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg 
        w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleFeedbackRestart}/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleFeedbackRestart}
                            onFeedbackSent={() => setFeedbackSent(true)} />
                    )}
                </>
            )}
            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/matheuscortes">Matheus Cortes</a>
            </footer>
        </div>
    )
}