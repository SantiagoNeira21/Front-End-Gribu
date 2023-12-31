import React from "react";
import { View, Text, FlatList } from 'react-native';
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text>_______________________________________________________</Text>}
            renderItem={({ item: repo }) => (
                <RepositoryItem { ... repo} />
            )}
        />
    )
}

export default RepositoryList