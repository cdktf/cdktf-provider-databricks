# `databricks_user`

Refer to the Terraform Registory for docs: [`databricks_user`](https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-databricks.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-databricks.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user databricks_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.user.User.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import user

user.User(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_name: str,
  acl_principal_id: str = None,
  active: typing.Union[bool, IResolvable] = None,
  allow_cluster_create: typing.Union[bool, IResolvable] = None,
  allow_instance_pool_create: typing.Union[bool, IResolvable] = None,
  databricks_sql_access: typing.Union[bool, IResolvable] = None,
  disable_as_user_deletion: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  external_id: str = None,
  force: typing.Union[bool, IResolvable] = None,
  force_delete_home_dir: typing.Union[bool, IResolvable] = None,
  force_delete_repos: typing.Union[bool, IResolvable] = None,
  home: str = None,
  id: str = None,
  repos: str = None,
  workspace_access: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#user_name User#user_name}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.aclPrincipalId">acl_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#acl_principal_id User#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#active User#active}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.allowClusterCreate">allow_cluster_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#allow_cluster_create User#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.allowInstancePoolCreate">allow_instance_pool_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#allow_instance_pool_create User#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.databricksSqlAccess">databricks_sql_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#databricks_sql_access User#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.disableAsUserDeletion">disable_as_user_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#disable_as_user_deletion User#disable_as_user_deletion}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#display_name User#display_name}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#external_id User#external_id}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#force User#force}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.forceDeleteHomeDir">force_delete_home_dir</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#force_delete_home_dir User#force_delete_home_dir}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.forceDeleteRepos">force_delete_repos</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#force_delete_repos User#force_delete_repos}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.home">home</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#home User#home}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.repos">repos</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#repos User#repos}. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.workspaceAccess">workspace_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#workspace_access User#workspace_access}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.user.User.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.user.User.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.user.User.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.user.User.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.user.User.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.user.User.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-databricks.user.User.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#user_name User#user_name}.

---

##### `acl_principal_id`<sup>Optional</sup> <a name="acl_principal_id" id="@cdktf/provider-databricks.user.User.Initializer.parameter.aclPrincipalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#acl_principal_id User#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-databricks.user.User.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#active User#active}.

---

##### `allow_cluster_create`<sup>Optional</sup> <a name="allow_cluster_create" id="@cdktf/provider-databricks.user.User.Initializer.parameter.allowClusterCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#allow_cluster_create User#allow_cluster_create}.

---

##### `allow_instance_pool_create`<sup>Optional</sup> <a name="allow_instance_pool_create" id="@cdktf/provider-databricks.user.User.Initializer.parameter.allowInstancePoolCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#allow_instance_pool_create User#allow_instance_pool_create}.

---

##### `databricks_sql_access`<sup>Optional</sup> <a name="databricks_sql_access" id="@cdktf/provider-databricks.user.User.Initializer.parameter.databricksSqlAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#databricks_sql_access User#databricks_sql_access}.

---

##### `disable_as_user_deletion`<sup>Optional</sup> <a name="disable_as_user_deletion" id="@cdktf/provider-databricks.user.User.Initializer.parameter.disableAsUserDeletion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#disable_as_user_deletion User#disable_as_user_deletion}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-databricks.user.User.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#display_name User#display_name}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-databricks.user.User.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#external_id User#external_id}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-databricks.user.User.Initializer.parameter.force"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#force User#force}.

---

##### `force_delete_home_dir`<sup>Optional</sup> <a name="force_delete_home_dir" id="@cdktf/provider-databricks.user.User.Initializer.parameter.forceDeleteHomeDir"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#force_delete_home_dir User#force_delete_home_dir}.

---

##### `force_delete_repos`<sup>Optional</sup> <a name="force_delete_repos" id="@cdktf/provider-databricks.user.User.Initializer.parameter.forceDeleteRepos"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#force_delete_repos User#force_delete_repos}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-databricks.user.User.Initializer.parameter.home"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#home User#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.user.User.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktf/provider-databricks.user.User.Initializer.parameter.repos"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#repos User#repos}.

---

##### `workspace_access`<sup>Optional</sup> <a name="workspace_access" id="@cdktf/provider-databricks.user.User.Initializer.parameter.workspaceAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#workspace_access User#workspace_access}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.user.User.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.user.User.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.user.User.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.user.User.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.user.User.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetAclPrincipalId">reset_acl_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetAllowClusterCreate">reset_allow_cluster_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetAllowInstancePoolCreate">reset_allow_instance_pool_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetDatabricksSqlAccess">reset_databricks_sql_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetDisableAsUserDeletion">reset_disable_as_user_deletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetForce">reset_force</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetForceDeleteHomeDir">reset_force_delete_home_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetForceDeleteRepos">reset_force_delete_repos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetHome">reset_home</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetRepos">reset_repos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetWorkspaceAccess">reset_workspace_access</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.user.User.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.user.User.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.user.User.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.user.User.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.user.User.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.user.User.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.user.User.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.user.User.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.user.User.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.user.User.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.user.User.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.user.User.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.user.User.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.user.User.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.user.User.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.user.User.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.user.User.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.user.User.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_acl_principal_id` <a name="reset_acl_principal_id" id="@cdktf/provider-databricks.user.User.resetAclPrincipalId"></a>

```python
def reset_acl_principal_id() -> None
```

##### `reset_active` <a name="reset_active" id="@cdktf/provider-databricks.user.User.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_allow_cluster_create` <a name="reset_allow_cluster_create" id="@cdktf/provider-databricks.user.User.resetAllowClusterCreate"></a>

```python
def reset_allow_cluster_create() -> None
```

##### `reset_allow_instance_pool_create` <a name="reset_allow_instance_pool_create" id="@cdktf/provider-databricks.user.User.resetAllowInstancePoolCreate"></a>

```python
def reset_allow_instance_pool_create() -> None
```

##### `reset_databricks_sql_access` <a name="reset_databricks_sql_access" id="@cdktf/provider-databricks.user.User.resetDatabricksSqlAccess"></a>

```python
def reset_databricks_sql_access() -> None
```

##### `reset_disable_as_user_deletion` <a name="reset_disable_as_user_deletion" id="@cdktf/provider-databricks.user.User.resetDisableAsUserDeletion"></a>

```python
def reset_disable_as_user_deletion() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-databricks.user.User.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktf/provider-databricks.user.User.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_force` <a name="reset_force" id="@cdktf/provider-databricks.user.User.resetForce"></a>

```python
def reset_force() -> None
```

##### `reset_force_delete_home_dir` <a name="reset_force_delete_home_dir" id="@cdktf/provider-databricks.user.User.resetForceDeleteHomeDir"></a>

```python
def reset_force_delete_home_dir() -> None
```

##### `reset_force_delete_repos` <a name="reset_force_delete_repos" id="@cdktf/provider-databricks.user.User.resetForceDeleteRepos"></a>

```python
def reset_force_delete_repos() -> None
```

##### `reset_home` <a name="reset_home" id="@cdktf/provider-databricks.user.User.resetHome"></a>

```python
def reset_home() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.user.User.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_repos` <a name="reset_repos" id="@cdktf/provider-databricks.user.User.resetRepos"></a>

```python
def reset_repos() -> None
```

##### `reset_workspace_access` <a name="reset_workspace_access" id="@cdktf/provider-databricks.user.User.resetWorkspaceAccess"></a>

```python
def reset_workspace_access() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.user.User.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.user.User.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.user.User.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import user

user.User.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.user.User.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.user.User.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import user

user.User.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.user.User.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.user.User.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import user

user.User.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.user.User.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.user.User.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.aclPrincipalIdInput">acl_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.allowClusterCreateInput">allow_cluster_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.allowInstancePoolCreateInput">allow_instance_pool_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.databricksSqlAccessInput">databricks_sql_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.disableAsUserDeletionInput">disable_as_user_deletion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.forceDeleteHomeDirInput">force_delete_home_dir_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.forceDeleteReposInput">force_delete_repos_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.forceInput">force_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.homeInput">home_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.reposInput">repos_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.workspaceAccessInput">workspace_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.aclPrincipalId">acl_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.allowClusterCreate">allow_cluster_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.allowInstancePoolCreate">allow_instance_pool_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.databricksSqlAccess">databricks_sql_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.disableAsUserDeletion">disable_as_user_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.forceDeleteHomeDir">force_delete_home_dir</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.forceDeleteRepos">force_delete_repos</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.home">home</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.repos">repos</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.workspaceAccess">workspace_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.user.User.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.user.User.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.user.User.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.user.User.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.user.User.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.user.User.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.user.User.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.user.User.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.user.User.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.user.User.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.user.User.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.user.User.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.user.User.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.user.User.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_principal_id_input`<sup>Optional</sup> <a name="acl_principal_id_input" id="@cdktf/provider-databricks.user.User.property.aclPrincipalIdInput"></a>

```python
acl_principal_id_input: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-databricks.user.User.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_cluster_create_input`<sup>Optional</sup> <a name="allow_cluster_create_input" id="@cdktf/provider-databricks.user.User.property.allowClusterCreateInput"></a>

```python
allow_cluster_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_instance_pool_create_input`<sup>Optional</sup> <a name="allow_instance_pool_create_input" id="@cdktf/provider-databricks.user.User.property.allowInstancePoolCreateInput"></a>

```python
allow_instance_pool_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `databricks_sql_access_input`<sup>Optional</sup> <a name="databricks_sql_access_input" id="@cdktf/provider-databricks.user.User.property.databricksSqlAccessInput"></a>

```python
databricks_sql_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_as_user_deletion_input`<sup>Optional</sup> <a name="disable_as_user_deletion_input" id="@cdktf/provider-databricks.user.User.property.disableAsUserDeletionInput"></a>

```python
disable_as_user_deletion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-databricks.user.User.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-databricks.user.User.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `force_delete_home_dir_input`<sup>Optional</sup> <a name="force_delete_home_dir_input" id="@cdktf/provider-databricks.user.User.property.forceDeleteHomeDirInput"></a>

```python
force_delete_home_dir_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_delete_repos_input`<sup>Optional</sup> <a name="force_delete_repos_input" id="@cdktf/provider-databricks.user.User.property.forceDeleteReposInput"></a>

```python
force_delete_repos_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_input`<sup>Optional</sup> <a name="force_input" id="@cdktf/provider-databricks.user.User.property.forceInput"></a>

```python
force_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `home_input`<sup>Optional</sup> <a name="home_input" id="@cdktf/provider-databricks.user.User.property.homeInput"></a>

```python
home_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.user.User.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repos_input`<sup>Optional</sup> <a name="repos_input" id="@cdktf/provider-databricks.user.User.property.reposInput"></a>

```python
repos_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-databricks.user.User.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `workspace_access_input`<sup>Optional</sup> <a name="workspace_access_input" id="@cdktf/provider-databricks.user.User.property.workspaceAccessInput"></a>

```python
workspace_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `acl_principal_id`<sup>Required</sup> <a name="acl_principal_id" id="@cdktf/provider-databricks.user.User.property.aclPrincipalId"></a>

```python
acl_principal_id: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-databricks.user.User.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_cluster_create`<sup>Required</sup> <a name="allow_cluster_create" id="@cdktf/provider-databricks.user.User.property.allowClusterCreate"></a>

```python
allow_cluster_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_instance_pool_create`<sup>Required</sup> <a name="allow_instance_pool_create" id="@cdktf/provider-databricks.user.User.property.allowInstancePoolCreate"></a>

```python
allow_instance_pool_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `databricks_sql_access`<sup>Required</sup> <a name="databricks_sql_access" id="@cdktf/provider-databricks.user.User.property.databricksSqlAccess"></a>

```python
databricks_sql_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_as_user_deletion`<sup>Required</sup> <a name="disable_as_user_deletion" id="@cdktf/provider-databricks.user.User.property.disableAsUserDeletion"></a>

```python
disable_as_user_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.user.User.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-databricks.user.User.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-databricks.user.User.property.force"></a>

```python
force: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_delete_home_dir`<sup>Required</sup> <a name="force_delete_home_dir" id="@cdktf/provider-databricks.user.User.property.forceDeleteHomeDir"></a>

```python
force_delete_home_dir: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_delete_repos`<sup>Required</sup> <a name="force_delete_repos" id="@cdktf/provider-databricks.user.User.property.forceDeleteRepos"></a>

```python
force_delete_repos: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `home`<sup>Required</sup> <a name="home" id="@cdktf/provider-databricks.user.User.property.home"></a>

```python
home: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.user.User.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repos`<sup>Required</sup> <a name="repos" id="@cdktf/provider-databricks.user.User.property.repos"></a>

```python
repos: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-databricks.user.User.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `workspace_access`<sup>Required</sup> <a name="workspace_access" id="@cdktf/provider-databricks.user.User.property.workspaceAccess"></a>

```python
workspace_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.user.User.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.user.User.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-databricks.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.user.UserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import user

user.UserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_name: str,
  acl_principal_id: str = None,
  active: typing.Union[bool, IResolvable] = None,
  allow_cluster_create: typing.Union[bool, IResolvable] = None,
  allow_instance_pool_create: typing.Union[bool, IResolvable] = None,
  databricks_sql_access: typing.Union[bool, IResolvable] = None,
  disable_as_user_deletion: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  external_id: str = None,
  force: typing.Union[bool, IResolvable] = None,
  force_delete_home_dir: typing.Union[bool, IResolvable] = None,
  force_delete_repos: typing.Union[bool, IResolvable] = None,
  home: str = None,
  id: str = None,
  repos: str = None,
  workspace_access: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#user_name User#user_name}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.aclPrincipalId">acl_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#acl_principal_id User#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#active User#active}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.allowClusterCreate">allow_cluster_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#allow_cluster_create User#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.allowInstancePoolCreate">allow_instance_pool_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#allow_instance_pool_create User#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.databricksSqlAccess">databricks_sql_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#databricks_sql_access User#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.disableAsUserDeletion">disable_as_user_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#disable_as_user_deletion User#disable_as_user_deletion}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#display_name User#display_name}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#external_id User#external_id}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#force User#force}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.forceDeleteHomeDir">force_delete_home_dir</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#force_delete_home_dir User#force_delete_home_dir}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.forceDeleteRepos">force_delete_repos</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#force_delete_repos User#force_delete_repos}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.home">home</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#home User#home}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.repos">repos</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#repos User#repos}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.workspaceAccess">workspace_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#workspace_access User#workspace_access}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.user.UserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.user.UserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.user.UserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.user.UserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.user.UserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.user.UserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.user.UserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-databricks.user.UserConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#user_name User#user_name}.

---

##### `acl_principal_id`<sup>Optional</sup> <a name="acl_principal_id" id="@cdktf/provider-databricks.user.UserConfig.property.aclPrincipalId"></a>

```python
acl_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#acl_principal_id User#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-databricks.user.UserConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#active User#active}.

---

##### `allow_cluster_create`<sup>Optional</sup> <a name="allow_cluster_create" id="@cdktf/provider-databricks.user.UserConfig.property.allowClusterCreate"></a>

```python
allow_cluster_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#allow_cluster_create User#allow_cluster_create}.

---

##### `allow_instance_pool_create`<sup>Optional</sup> <a name="allow_instance_pool_create" id="@cdktf/provider-databricks.user.UserConfig.property.allowInstancePoolCreate"></a>

```python
allow_instance_pool_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#allow_instance_pool_create User#allow_instance_pool_create}.

---

##### `databricks_sql_access`<sup>Optional</sup> <a name="databricks_sql_access" id="@cdktf/provider-databricks.user.UserConfig.property.databricksSqlAccess"></a>

```python
databricks_sql_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#databricks_sql_access User#databricks_sql_access}.

---

##### `disable_as_user_deletion`<sup>Optional</sup> <a name="disable_as_user_deletion" id="@cdktf/provider-databricks.user.UserConfig.property.disableAsUserDeletion"></a>

```python
disable_as_user_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#disable_as_user_deletion User#disable_as_user_deletion}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-databricks.user.UserConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#display_name User#display_name}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-databricks.user.UserConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#external_id User#external_id}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-databricks.user.UserConfig.property.force"></a>

```python
force: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#force User#force}.

---

##### `force_delete_home_dir`<sup>Optional</sup> <a name="force_delete_home_dir" id="@cdktf/provider-databricks.user.UserConfig.property.forceDeleteHomeDir"></a>

```python
force_delete_home_dir: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#force_delete_home_dir User#force_delete_home_dir}.

---

##### `force_delete_repos`<sup>Optional</sup> <a name="force_delete_repos" id="@cdktf/provider-databricks.user.UserConfig.property.forceDeleteRepos"></a>

```python
force_delete_repos: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#force_delete_repos User#force_delete_repos}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-databricks.user.UserConfig.property.home"></a>

```python
home: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#home User#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.user.UserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktf/provider-databricks.user.UserConfig.property.repos"></a>

```python
repos: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#repos User#repos}.

---

##### `workspace_access`<sup>Optional</sup> <a name="workspace_access" id="@cdktf/provider-databricks.user.UserConfig.property.workspaceAccess"></a>

```python
workspace_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/user#workspace_access User#workspace_access}.

---



