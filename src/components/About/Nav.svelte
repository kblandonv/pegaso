<header>
	<nav>
		<h2 id="site_title">
			<a href="/">
				<i class="bi bi-feather"></i>
				Pegaso
			</a>
		</h2>
		<div class="links">
			<a href="mailto:contactus@yourwebsite.com">Contact</a>
		</div>
	</nav>
</header>

<style lang="scss">
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 0 2em 0;
		padding: 2em 0;

		a {
			transition: 0.1s ease;
			&:hover {
				opacity: 0.6;
			}
		}

		#site_title {
			margin: 0;
		}
		#site_title a {
			display: flex;
			align-items: center;
			gap: 10px;
			color: #ffffff;
			
			font-size: 16px;
			font-weight: 700;
			letter-spacing: 2px;
			line-height: 1;
			text-decoration: none;
			text-transform: uppercase;
		}
		.links a {
			margin-left: 1em;
			color: #ffffff;
		}
	}
</style>
