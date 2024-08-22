

"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getStripe } from "@utils/get-stripe"
import { useSearchParams } from "next/navigation"

const ResultPage = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    // This is where video had break 1:39:31/1:55:52
}