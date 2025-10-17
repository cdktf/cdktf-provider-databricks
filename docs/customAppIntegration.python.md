# `customAppIntegration` Submodule <a name="`customAppIntegration` Submodule" id="@cdktf/provider-databricks.customAppIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomAppIntegration <a name="CustomAppIntegration" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration databricks_custom_app_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import custom_app_integration

customAppIntegration.CustomAppIntegration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  client_id: str = None,
  client_secret: str = None,
  confidential: bool | IResolvable = None,
  created_by: typing.Union[int, float] = None,
  create_time: str = None,
  creator_username: str = None,
  id: str = None,
  integration_id: str = None,
  name: str = None,
  redirect_urls: typing.List[str] = None,
  scopes: typing.List[str] = None,
  token_access_policy: CustomAppIntegrationTokenAccessPolicy = None,
  user_authorized_scopes: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.confidential">confidential</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.createdBy">created_by</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.createTime">create_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.creatorUsername">creator_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.integrationId">integration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.redirectUrls">redirect_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.tokenAccessPolicy">token_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | token_access_policy block. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.userAuthorizedScopes">user_authorized_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#user_authorized_scopes CustomAppIntegration#user_authorized_scopes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}.

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.confidential"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.createdBy"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}.

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.createTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}.

---

##### `creator_username`<sup>Optional</sup> <a name="creator_username" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.creatorUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_id`<sup>Optional</sup> <a name="integration_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.integrationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}.

---

##### `redirect_urls`<sup>Optional</sup> <a name="redirect_urls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.redirectUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}.

---

##### `token_access_policy`<sup>Optional</sup> <a name="token_access_policy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.tokenAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

token_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#token_access_policy CustomAppIntegration#token_access_policy}

---

##### `user_authorized_scopes`<sup>Optional</sup> <a name="user_authorized_scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.userAuthorizedScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#user_authorized_scopes CustomAppIntegration#user_authorized_scopes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy">put_token_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetConfidential">reset_confidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreateTime">reset_create_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatorUsername">reset_creator_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetIntegrationId">reset_integration_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetRedirectUrls">reset_redirect_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetTokenAccessPolicy">reset_token_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetUserAuthorizedScopes">reset_user_authorized_scopes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_token_access_policy` <a name="put_token_access_policy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy"></a>

```python
def put_token_access_policy(
  access_token_ttl_in_minutes: typing.Union[int, float] = None,
  refresh_token_ttl_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `access_token_ttl_in_minutes`<sup>Optional</sup> <a name="access_token_ttl_in_minutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy.parameter.accessTokenTtlInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#access_token_ttl_in_minutes CustomAppIntegration#access_token_ttl_in_minutes}.

---

###### `refresh_token_ttl_in_minutes`<sup>Optional</sup> <a name="refresh_token_ttl_in_minutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy.parameter.refreshTokenTtlInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#refresh_token_ttl_in_minutes CustomAppIntegration#refresh_token_ttl_in_minutes}.

---

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_confidential` <a name="reset_confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetConfidential"></a>

```python
def reset_confidential() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_create_time` <a name="reset_create_time" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreateTime"></a>

```python
def reset_create_time() -> None
```

##### `reset_creator_username` <a name="reset_creator_username" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatorUsername"></a>

```python
def reset_creator_username() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_id` <a name="reset_integration_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetIntegrationId"></a>

```python
def reset_integration_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_redirect_urls` <a name="reset_redirect_urls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetRedirectUrls"></a>

```python
def reset_redirect_urls() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_token_access_policy` <a name="reset_token_access_policy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetTokenAccessPolicy"></a>

```python
def reset_token_access_policy() -> None
```

##### `reset_user_authorized_scopes` <a name="reset_user_authorized_scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetUserAuthorizedScopes"></a>

```python
def reset_user_authorized_scopes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CustomAppIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import custom_app_integration

customAppIntegration.CustomAppIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import custom_app_integration

customAppIntegration.CustomAppIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import custom_app_integration

customAppIntegration.CustomAppIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import custom_app_integration

customAppIntegration.CustomAppIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CustomAppIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomAppIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomAppIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomAppIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicy">token_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference">CustomAppIntegrationTokenAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidentialInput">confidential_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdByInput">created_by_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTimeInput">create_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsernameInput">creator_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationIdInput">integration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrlsInput">redirect_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicyInput">token_access_policy_input</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopesInput">user_authorized_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidential">confidential</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdBy">created_by</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsername">creator_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrls">redirect_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopes">user_authorized_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `token_access_policy`<sup>Required</sup> <a name="token_access_policy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicy"></a>

```python
token_access_policy: CustomAppIntegrationTokenAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference">CustomAppIntegrationTokenAccessPolicyOutputReference</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `confidential_input`<sup>Optional</sup> <a name="confidential_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidentialInput"></a>

```python
confidential_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdByInput"></a>

```python
created_by_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_time_input`<sup>Optional</sup> <a name="create_time_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTimeInput"></a>

```python
create_time_input: str
```

- *Type:* str

---

##### `creator_username_input`<sup>Optional</sup> <a name="creator_username_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsernameInput"></a>

```python
creator_username_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_id_input`<sup>Optional</sup> <a name="integration_id_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationIdInput"></a>

```python
integration_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `redirect_urls_input`<sup>Optional</sup> <a name="redirect_urls_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrlsInput"></a>

```python
redirect_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_access_policy_input`<sup>Optional</sup> <a name="token_access_policy_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicyInput"></a>

```python
token_access_policy_input: CustomAppIntegrationTokenAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---

##### `user_authorized_scopes_input`<sup>Optional</sup> <a name="user_authorized_scopes_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopesInput"></a>

```python
user_authorized_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidential"></a>

```python
confidential: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdBy"></a>

```python
created_by: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator_username`<sup>Required</sup> <a name="creator_username" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsername"></a>

```python
creator_username: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `redirect_urls`<sup>Required</sup> <a name="redirect_urls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrls"></a>

```python
redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_authorized_scopes`<sup>Required</sup> <a name="user_authorized_scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopes"></a>

```python
user_authorized_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomAppIntegrationConfig <a name="CustomAppIntegrationConfig" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import custom_app_integration

customAppIntegration.CustomAppIntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  client_id: str = None,
  client_secret: str = None,
  confidential: bool | IResolvable = None,
  created_by: typing.Union[int, float] = None,
  create_time: str = None,
  creator_username: str = None,
  id: str = None,
  integration_id: str = None,
  name: str = None,
  redirect_urls: typing.List[str] = None,
  scopes: typing.List[str] = None,
  token_access_policy: CustomAppIntegrationTokenAccessPolicy = None,
  user_authorized_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.confidential">confidential</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createdBy">created_by</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createTime">create_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.creatorUsername">creator_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.integrationId">integration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.redirectUrls">redirect_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.tokenAccessPolicy">token_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | token_access_policy block. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.userAuthorizedScopes">user_authorized_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#user_authorized_scopes CustomAppIntegration#user_authorized_scopes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}.

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.confidential"></a>

```python
confidential: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createdBy"></a>

```python
created_by: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}.

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}.

---

##### `creator_username`<sup>Optional</sup> <a name="creator_username" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.creatorUsername"></a>

```python
creator_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_id`<sup>Optional</sup> <a name="integration_id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}.

---

##### `redirect_urls`<sup>Optional</sup> <a name="redirect_urls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.redirectUrls"></a>

```python
redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}.

---

##### `token_access_policy`<sup>Optional</sup> <a name="token_access_policy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.tokenAccessPolicy"></a>

```python
token_access_policy: CustomAppIntegrationTokenAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

token_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#token_access_policy CustomAppIntegration#token_access_policy}

---

##### `user_authorized_scopes`<sup>Optional</sup> <a name="user_authorized_scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.userAuthorizedScopes"></a>

```python
user_authorized_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#user_authorized_scopes CustomAppIntegration#user_authorized_scopes}.

---

### CustomAppIntegrationTokenAccessPolicy <a name="CustomAppIntegrationTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import custom_app_integration

customAppIntegration.CustomAppIntegrationTokenAccessPolicy(
  access_token_ttl_in_minutes: typing.Union[int, float] = None,
  refresh_token_ttl_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.accessTokenTtlInMinutes">access_token_ttl_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#access_token_ttl_in_minutes CustomAppIntegration#access_token_ttl_in_minutes}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.refreshTokenTtlInMinutes">refresh_token_ttl_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#refresh_token_ttl_in_minutes CustomAppIntegration#refresh_token_ttl_in_minutes}. |

---

##### `access_token_ttl_in_minutes`<sup>Optional</sup> <a name="access_token_ttl_in_minutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.accessTokenTtlInMinutes"></a>

```python
access_token_ttl_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#access_token_ttl_in_minutes CustomAppIntegration#access_token_ttl_in_minutes}.

---

##### `refresh_token_ttl_in_minutes`<sup>Optional</sup> <a name="refresh_token_ttl_in_minutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.refreshTokenTtlInMinutes"></a>

```python
refresh_token_ttl_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/custom_app_integration#refresh_token_ttl_in_minutes CustomAppIntegration#refresh_token_ttl_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomAppIntegrationTokenAccessPolicyOutputReference <a name="CustomAppIntegrationTokenAccessPolicyOutputReference" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import custom_app_integration

customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetAccessTokenTtlInMinutes">reset_access_token_ttl_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetRefreshTokenTtlInMinutes">reset_refresh_token_ttl_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_token_ttl_in_minutes` <a name="reset_access_token_ttl_in_minutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetAccessTokenTtlInMinutes"></a>

```python
def reset_access_token_ttl_in_minutes() -> None
```

##### `reset_refresh_token_ttl_in_minutes` <a name="reset_refresh_token_ttl_in_minutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetRefreshTokenTtlInMinutes"></a>

```python
def reset_refresh_token_ttl_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutesInput">access_token_ttl_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutesInput">refresh_token_ttl_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutes">access_token_ttl_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutes">refresh_token_ttl_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_ttl_in_minutes_input`<sup>Optional</sup> <a name="access_token_ttl_in_minutes_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutesInput"></a>

```python
access_token_ttl_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_token_ttl_in_minutes_input`<sup>Optional</sup> <a name="refresh_token_ttl_in_minutes_input" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutesInput"></a>

```python
refresh_token_ttl_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_token_ttl_in_minutes`<sup>Required</sup> <a name="access_token_ttl_in_minutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutes"></a>

```python
access_token_ttl_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_token_ttl_in_minutes`<sup>Required</sup> <a name="refresh_token_ttl_in_minutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutes"></a>

```python
refresh_token_ttl_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: CustomAppIntegrationTokenAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---



