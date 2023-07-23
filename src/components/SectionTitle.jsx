import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export const SectionTitle = ({options, onLeaveFeedback, total, positivePercentage}) => {

    return (
        <section>
            <h1>Please leave feedback</h1>
            <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
        <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </section>
    )
};