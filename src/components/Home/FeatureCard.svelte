<div class="feature-card flex flex-col items-start gap-1 rounded-lg  p-4">
    <div class="rounded container-icon">
        <div class="icon px-2 py-1 text-md">
            <slot class="icon" name="icon" />
        </div>
    </div>
    
    <div>
        <h3 class="text-lg font-semibold"><slot name="title" /></h3>
        <p class="mt-2 leading-relaxed text-slate-500"><slot name="content" /></p>
    </div>
</div>

<style lang="scss">
    .container-icon {
        
        .icon {
            font-family: 'JetBrains Mono', monospace;
            background: linear-gradient(90deg, #9335ff 40%, #bf35ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        border: 1px #e8c7ff solid;
        background: #f8efff;
    }

    .feature-card {
        background: none;
        border: 1px #ffffff00 solid;
        transition: all 0.5s ease;

        &:hover {
            background-color: #f8efff;
            border: 1px #e8c7ff solid;
        }
    }

</style>