import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react"
import { CiSearch } from "react-icons/ci"
// import "./search-bar.scss"

const SearchBar = () => {
  return (
    <>
      <Input
        startIcon={
          <CiSearch size={22} color="grey" />
        }
        className="w-[500px] h-[45px] bg-zinc-100 "
        placeholder="جستجو"
        endIcon={
          <Button className="bg-purple-800 button-search h-[40px] absolute left-[-9px] bottom-[-21px]">
            جستجو کنید
          </Button>
        }
      />
    </>
  )
}

export default SearchBar
