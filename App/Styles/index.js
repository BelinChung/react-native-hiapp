let itemCell = {
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 0,
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    shadowOffset: {
        height: 2,
        width: 1
    }
}

export default {
    androidSpinnerColor: '#009688',    
    containerBg: {
        backgroundColor: '#efeff4'
    },
    containerShadow: {
        borderColor: '#e1e1e1',
        borderLeftWidth: 1
    },
    itemCell: itemCell,
    card: {
        tweetContainer: {
            ...itemCell,
            backgroundColor: 'white'
        },
        topContainer: {
            flexDirection: 'row',
            padding: 10,
            borderColor: '#e1e1e1',
            borderBottomWidth: 1
        },
        avatar: {
            backgroundColor: 'gray',
            width: 35,
            height: 35,
            borderRadius: 4,
            marginRight: 6
        },
        time: {
            fontSize: 13,
            color: '#8999a5',
            marginTop: 2
        },
        name: {
            color: '#ff9630',
            fontWeight: '600',
            fontSize: 14
        },
        middleContainer: {
            padding: 10,
            borderColor: '#e1e1e1',
            borderBottomWidth: 1
        },
        msgImage: {
            marginTop: 10,
            height: 200,
            backgroundColor: '#e1e1e1'   
        },
        bottomContainer: {
            flexDirection: 'row',
            height: 40,
            backgroundColor: '#fafafa'
        },
        bottomTool: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        bottomToolText: {
            color: '#6D6D78',
            fontWeight: '500',
            alignItems: 'center'
        }
    }
}