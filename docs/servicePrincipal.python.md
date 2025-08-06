# `servicePrincipal` Submodule <a name="`servicePrincipal` Submodule" id="@cdktf/provider-databricks.servicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipal <a name="ServicePrincipal" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal databricks_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal

servicePrincipal.ServicePrincipal(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acl_principal_id: str = None,
  active: typing.Union[bool, IResolvable] = None,
  allow_cluster_create: typing.Union[bool, IResolvable] = None,
  allow_instance_pool_create: typing.Union[bool, IResolvable] = None,
  application_id: str = None,
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
  workspace_access: typing.Union[bool, IResolvable] = None,
  workspace_consume: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.aclPrincipalId">acl_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#active ServicePrincipal#active}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.allowClusterCreate">allow_cluster_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.allowInstancePoolCreate">allow_instance_pool_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.databricksSqlAccess">databricks_sql_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.disableAsUserDeletion">disable_as_user_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#force ServicePrincipal#force}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forceDeleteHomeDir">force_delete_home_dir</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forceDeleteRepos">force_delete_repos</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.home">home</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#home ServicePrincipal#home}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#id ServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.repos">repos</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#repos ServicePrincipal#repos}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.workspaceAccess">workspace_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.workspaceConsume">workspace_consume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_principal_id`<sup>Optional</sup> <a name="acl_principal_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.aclPrincipalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#active ServicePrincipal#active}.

---

##### `allow_cluster_create`<sup>Optional</sup> <a name="allow_cluster_create" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.allowClusterCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}.

---

##### `allow_instance_pool_create`<sup>Optional</sup> <a name="allow_instance_pool_create" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.allowInstancePoolCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}.

---

##### `databricks_sql_access`<sup>Optional</sup> <a name="databricks_sql_access" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.databricksSqlAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}.

---

##### `disable_as_user_deletion`<sup>Optional</sup> <a name="disable_as_user_deletion" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.disableAsUserDeletion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.force"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#force ServicePrincipal#force}.

---

##### `force_delete_home_dir`<sup>Optional</sup> <a name="force_delete_home_dir" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forceDeleteHomeDir"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}.

---

##### `force_delete_repos`<sup>Optional</sup> <a name="force_delete_repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forceDeleteRepos"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.home"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#home ServicePrincipal#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#id ServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.repos"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#repos ServicePrincipal#repos}.

---

##### `workspace_access`<sup>Optional</sup> <a name="workspace_access" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.workspaceAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}.

---

##### `workspace_consume`<sup>Optional</sup> <a name="workspace_consume" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.workspaceConsume"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAclPrincipalId">reset_acl_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowClusterCreate">reset_allow_cluster_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowInstancePoolCreate">reset_allow_instance_pool_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDatabricksSqlAccess">reset_databricks_sql_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDisableAsUserDeletion">reset_disable_as_user_deletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForce">reset_force</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteHomeDir">reset_force_delete_home_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteRepos">reset_force_delete_repos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetHome">reset_home</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetRepos">reset_repos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceAccess">reset_workspace_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceConsume">reset_workspace_consume</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_acl_principal_id` <a name="reset_acl_principal_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAclPrincipalId"></a>

```python
def reset_acl_principal_id() -> None
```

##### `reset_active` <a name="reset_active" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_allow_cluster_create` <a name="reset_allow_cluster_create" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowClusterCreate"></a>

```python
def reset_allow_cluster_create() -> None
```

##### `reset_allow_instance_pool_create` <a name="reset_allow_instance_pool_create" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowInstancePoolCreate"></a>

```python
def reset_allow_instance_pool_create() -> None
```

##### `reset_application_id` <a name="reset_application_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_databricks_sql_access` <a name="reset_databricks_sql_access" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDatabricksSqlAccess"></a>

```python
def reset_databricks_sql_access() -> None
```

##### `reset_disable_as_user_deletion` <a name="reset_disable_as_user_deletion" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDisableAsUserDeletion"></a>

```python
def reset_disable_as_user_deletion() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_force` <a name="reset_force" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForce"></a>

```python
def reset_force() -> None
```

##### `reset_force_delete_home_dir` <a name="reset_force_delete_home_dir" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteHomeDir"></a>

```python
def reset_force_delete_home_dir() -> None
```

##### `reset_force_delete_repos` <a name="reset_force_delete_repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteRepos"></a>

```python
def reset_force_delete_repos() -> None
```

##### `reset_home` <a name="reset_home" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetHome"></a>

```python
def reset_home() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_repos` <a name="reset_repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetRepos"></a>

```python
def reset_repos() -> None
```

##### `reset_workspace_access` <a name="reset_workspace_access" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceAccess"></a>

```python
def reset_workspace_access() -> None
```

##### `reset_workspace_consume` <a name="reset_workspace_consume" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceConsume"></a>

```python
def reset_workspace_consume() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicePrincipal resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal

servicePrincipal.ServicePrincipal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal

servicePrincipal.ServicePrincipal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal

servicePrincipal.ServicePrincipal.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal

servicePrincipal.ServicePrincipal.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicePrincipal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicePrincipal to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalIdInput">acl_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreateInput">allow_cluster_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreateInput">allow_instance_pool_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccessInput">databricks_sql_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletionInput">disable_as_user_deletion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDirInput">force_delete_home_dir_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteReposInput">force_delete_repos_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceInput">force_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.homeInput">home_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.reposInput">repos_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccessInput">workspace_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsumeInput">workspace_consume_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalId">acl_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreate">allow_cluster_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreate">allow_instance_pool_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccess">databricks_sql_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletion">disable_as_user_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDir">force_delete_home_dir</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteRepos">force_delete_repos</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.home">home</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.repos">repos</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccess">workspace_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsume">workspace_consume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_principal_id_input`<sup>Optional</sup> <a name="acl_principal_id_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalIdInput"></a>

```python
acl_principal_id_input: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_cluster_create_input`<sup>Optional</sup> <a name="allow_cluster_create_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreateInput"></a>

```python
allow_cluster_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_instance_pool_create_input`<sup>Optional</sup> <a name="allow_instance_pool_create_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreateInput"></a>

```python
allow_instance_pool_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `databricks_sql_access_input`<sup>Optional</sup> <a name="databricks_sql_access_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccessInput"></a>

```python
databricks_sql_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_as_user_deletion_input`<sup>Optional</sup> <a name="disable_as_user_deletion_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletionInput"></a>

```python
disable_as_user_deletion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `force_delete_home_dir_input`<sup>Optional</sup> <a name="force_delete_home_dir_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDirInput"></a>

```python
force_delete_home_dir_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_delete_repos_input`<sup>Optional</sup> <a name="force_delete_repos_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteReposInput"></a>

```python
force_delete_repos_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_input`<sup>Optional</sup> <a name="force_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceInput"></a>

```python
force_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `home_input`<sup>Optional</sup> <a name="home_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.homeInput"></a>

```python
home_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repos_input`<sup>Optional</sup> <a name="repos_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.reposInput"></a>

```python
repos_input: str
```

- *Type:* str

---

##### `workspace_access_input`<sup>Optional</sup> <a name="workspace_access_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccessInput"></a>

```python
workspace_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `workspace_consume_input`<sup>Optional</sup> <a name="workspace_consume_input" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsumeInput"></a>

```python
workspace_consume_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `acl_principal_id`<sup>Required</sup> <a name="acl_principal_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalId"></a>

```python
acl_principal_id: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_cluster_create`<sup>Required</sup> <a name="allow_cluster_create" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreate"></a>

```python
allow_cluster_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_instance_pool_create`<sup>Required</sup> <a name="allow_instance_pool_create" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreate"></a>

```python
allow_instance_pool_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `databricks_sql_access`<sup>Required</sup> <a name="databricks_sql_access" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccess"></a>

```python
databricks_sql_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_as_user_deletion`<sup>Required</sup> <a name="disable_as_user_deletion" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletion"></a>

```python
disable_as_user_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.force"></a>

```python
force: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_delete_home_dir`<sup>Required</sup> <a name="force_delete_home_dir" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDir"></a>

```python
force_delete_home_dir: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_delete_repos`<sup>Required</sup> <a name="force_delete_repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteRepos"></a>

```python
force_delete_repos: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `home`<sup>Required</sup> <a name="home" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.home"></a>

```python
home: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repos`<sup>Required</sup> <a name="repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.repos"></a>

```python
repos: str
```

- *Type:* str

---

##### `workspace_access`<sup>Required</sup> <a name="workspace_access" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccess"></a>

```python
workspace_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `workspace_consume`<sup>Required</sup> <a name="workspace_consume" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsume"></a>

```python
workspace_consume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalConfig <a name="ServicePrincipalConfig" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal

servicePrincipal.ServicePrincipalConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acl_principal_id: str = None,
  active: typing.Union[bool, IResolvable] = None,
  allow_cluster_create: typing.Union[bool, IResolvable] = None,
  allow_instance_pool_create: typing.Union[bool, IResolvable] = None,
  application_id: str = None,
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
  workspace_access: typing.Union[bool, IResolvable] = None,
  workspace_consume: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.aclPrincipalId">acl_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#active ServicePrincipal#active}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowClusterCreate">allow_cluster_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowInstancePoolCreate">allow_instance_pool_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.databricksSqlAccess">databricks_sql_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.disableAsUserDeletion">disable_as_user_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#force ServicePrincipal#force}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteHomeDir">force_delete_home_dir</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteRepos">force_delete_repos</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.home">home</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#home ServicePrincipal#home}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#id ServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.repos">repos</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#repos ServicePrincipal#repos}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceAccess">workspace_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceConsume">workspace_consume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_principal_id`<sup>Optional</sup> <a name="acl_principal_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.aclPrincipalId"></a>

```python
acl_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#active ServicePrincipal#active}.

---

##### `allow_cluster_create`<sup>Optional</sup> <a name="allow_cluster_create" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowClusterCreate"></a>

```python
allow_cluster_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}.

---

##### `allow_instance_pool_create`<sup>Optional</sup> <a name="allow_instance_pool_create" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowInstancePoolCreate"></a>

```python
allow_instance_pool_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}.

---

##### `databricks_sql_access`<sup>Optional</sup> <a name="databricks_sql_access" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.databricksSqlAccess"></a>

```python
databricks_sql_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}.

---

##### `disable_as_user_deletion`<sup>Optional</sup> <a name="disable_as_user_deletion" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.disableAsUserDeletion"></a>

```python
disable_as_user_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.force"></a>

```python
force: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#force ServicePrincipal#force}.

---

##### `force_delete_home_dir`<sup>Optional</sup> <a name="force_delete_home_dir" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteHomeDir"></a>

```python
force_delete_home_dir: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}.

---

##### `force_delete_repos`<sup>Optional</sup> <a name="force_delete_repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteRepos"></a>

```python
force_delete_repos: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.home"></a>

```python
home: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#home ServicePrincipal#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#id ServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.repos"></a>

```python
repos: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#repos ServicePrincipal#repos}.

---

##### `workspace_access`<sup>Optional</sup> <a name="workspace_access" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceAccess"></a>

```python
workspace_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}.

---

##### `workspace_consume`<sup>Optional</sup> <a name="workspace_consume" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceConsume"></a>

```python
workspace_consume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}.

---



