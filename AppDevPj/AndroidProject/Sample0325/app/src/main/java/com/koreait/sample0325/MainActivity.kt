package com.koreait.sample0325

import android.app.Activity
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.koreait.sample0325.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private val binding by lazy {
        ActivityMainBinding.inflate(layoutInflater)
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}


