import BillingForm from "@/components/BillingForm"
import Pricing from "../components/Pricing";
import PurchaseListingPage from "../components/Purchase-listing";
// import { getUserSubscriptionPlan } from "@/lib/stripe"

const Page = async () => {
    
    return (
    <>
        <BillingForm  />   
        <div className="pb-12 pt-12 pl-12 pr-12">
            <PurchaseListingPage />     
        </div>
        
    </>)
    
}

export default Page