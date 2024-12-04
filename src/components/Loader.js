const withLoader = (Component) => {
    return ({isLoading, ...props}) => {
        if(isLoading){
            return 'Загрузка'
        }
        return <Component {...props}/>
    }
}

export default withLoader;