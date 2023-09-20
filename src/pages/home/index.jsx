import { FeaturesSection } from './styled'

// Components
import HeroBanner from '../../components/HeroBanner'
import FeatureItem from '../../components/FeatureItem'

// Assets
import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'

export default function Page() {
    return (
        <main>
            <HeroBanner />
            <FeaturesSection>
                <h2 className="sr-only">Features</h2>
                <FeatureItem icon={iconChat} title="You are our #1 priority">
                    Need to talk to a representative? You can get in touch through our 24/7 chat or
                    through a phone call in less than 5 minutes.
                </FeatureItem>
                <FeatureItem icon={iconMoney} title="More savings means higher rates">
                    The more you save with us, the higher your interest rate will be!
                </FeatureItem>
                <FeatureItem icon={iconSecurity} title="Security you can trust">
                    We use top of the line encryption to make sure your data and money is always
                    safe.
                </FeatureItem>
            </FeaturesSection>
        </main>
    )
}
