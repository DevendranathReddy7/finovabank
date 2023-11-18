import Error from "../components/common/Error"
import supabase from "./Supabase"

export const getAccounts = async (userid) => {
    const { data, error } = await supabase
        .from('Users')
        .select('*').eq('userid', userid)
    if (error) {
        return error
        // throw new Error('invalid user')
    }
    return data
}
export const updateFromRows = async (userid, paymentData, fromFunds) => {
    // let newFunds = paymentData.selectedFromAccount[0].funds
    const { data, error } = await supabase
        .from('Users')
        .update({ 'funds': fromFunds })
        .eq('userid', userid).eq('accountNumber', paymentData.selectedFromAccount[0].accountNumber)
        .select()
    return data
}
export const updateToRows = async (userid, paymentData, toFunds) => {
    // let newFunds = paymentData.selectedFromAccount[0].funds
    const { data, error } = await supabase
        .from('Users')
        .update({ 'funds': toFunds })
        .eq('userid', userid).eq('accountNumber', paymentData.selectedToAccount[0].accountNumber)
        .select()
    return data
}
export const getPaymnetTypes = async (userid) => {

    let { data, error } = await supabase
        .from('PaymnetCapabailites')
        .select('*').eq('userId', userid)

    if (error) {
        <Error err={error}></Error>
        throw new Error('No Paymnets Found')
    }
    return data
}

export const getBiller = async () => {

    let { data, error } = await supabase
        .from('Billers')
        .select('*')

    if (error) {
        <Error err={error}></Error>
        throw new Error('No Billers Found')
    }
    return data
}
