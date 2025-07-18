# `servicePrincipalSecret` Submodule <a name="`servicePrincipalSecret` Submodule" id="@cdktf/provider-databricks.servicePrincipalSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalSecret <a name="ServicePrincipalSecret" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret databricks_service_principal_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_secret

servicePrincipalSecret.ServicePrincipalSecret(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_principal_id: str,
  create_time: str = None,
  expire_time: str = None,
  id: str = None,
  lifetime: str = None,
  secret: str = None,
  secret_hash: str = None,
  status: str = None,
  time_rotating: str = None,
  update_time: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#service_principal_id ServicePrincipalSecret#service_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.createTime">create_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#create_time ServicePrincipalSecret#create_time}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.expireTime">expire_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#expire_time ServicePrincipalSecret#expire_time}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#id ServicePrincipalSecret#id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.lifetime">lifetime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#lifetime ServicePrincipalSecret#lifetime}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#secret ServicePrincipalSecret#secret}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.secretHash">secret_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#secret_hash ServicePrincipalSecret#secret_hash}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#status ServicePrincipalSecret#status}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.timeRotating">time_rotating</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#time_rotating ServicePrincipalSecret#time_rotating}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.updateTime">update_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#update_time ServicePrincipalSecret#update_time}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.servicePrincipalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#service_principal_id ServicePrincipalSecret#service_principal_id}.

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.createTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#create_time ServicePrincipalSecret#create_time}.

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.expireTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#expire_time ServicePrincipalSecret#expire_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#id ServicePrincipalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.lifetime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#lifetime ServicePrincipalSecret#lifetime}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.secret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#secret ServicePrincipalSecret#secret}.

---

##### `secret_hash`<sup>Optional</sup> <a name="secret_hash" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.secretHash"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#secret_hash ServicePrincipalSecret#secret_hash}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#status ServicePrincipalSecret#status}.

---

##### `time_rotating`<sup>Optional</sup> <a name="time_rotating" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.timeRotating"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#time_rotating ServicePrincipalSecret#time_rotating}.

---

##### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.updateTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#update_time ServicePrincipalSecret#update_time}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetCreateTime">reset_create_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetExpireTime">reset_expire_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetLifetime">reset_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetSecretHash">reset_secret_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetTimeRotating">reset_time_rotating</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetUpdateTime">reset_update_time</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_create_time` <a name="reset_create_time" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetCreateTime"></a>

```python
def reset_create_time() -> None
```

##### `reset_expire_time` <a name="reset_expire_time" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetExpireTime"></a>

```python
def reset_expire_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lifetime` <a name="reset_lifetime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetLifetime"></a>

```python
def reset_lifetime() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_secret_hash` <a name="reset_secret_hash" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetSecretHash"></a>

```python
def reset_secret_hash() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_time_rotating` <a name="reset_time_rotating" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetTimeRotating"></a>

```python
def reset_time_rotating() -> None
```

##### `reset_update_time` <a name="reset_update_time" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetUpdateTime"></a>

```python
def reset_update_time() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicePrincipalSecret resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_secret

servicePrincipalSecret.ServicePrincipalSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_secret

servicePrincipalSecret.ServicePrincipalSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_secret

servicePrincipalSecret.ServicePrincipalSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_secret

servicePrincipalSecret.ServicePrincipalSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicePrincipalSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicePrincipalSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicePrincipalSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.createTimeInput">create_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.expireTimeInput">expire_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifetimeInput">lifetime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretHashInput">secret_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.timeRotatingInput">time_rotating_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.updateTimeInput">update_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifetime">lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretHash">secret_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.timeRotating">time_rotating</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time_input`<sup>Optional</sup> <a name="create_time_input" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.createTimeInput"></a>

```python
create_time_input: str
```

- *Type:* str

---

##### `expire_time_input`<sup>Optional</sup> <a name="expire_time_input" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.expireTimeInput"></a>

```python
expire_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifetime_input`<sup>Optional</sup> <a name="lifetime_input" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifetimeInput"></a>

```python
lifetime_input: str
```

- *Type:* str

---

##### `secret_hash_input`<sup>Optional</sup> <a name="secret_hash_input" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretHashInput"></a>

```python
secret_hash_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `time_rotating_input`<sup>Optional</sup> <a name="time_rotating_input" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.timeRotatingInput"></a>

```python
time_rotating_input: str
```

- *Type:* str

---

##### `update_time_input`<sup>Optional</sup> <a name="update_time_input" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.updateTimeInput"></a>

```python
update_time_input: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifetime"></a>

```python
lifetime: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `secret_hash`<sup>Required</sup> <a name="secret_hash" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretHash"></a>

```python
secret_hash: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_rotating`<sup>Required</sup> <a name="time_rotating" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.timeRotating"></a>

```python
time_rotating: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalSecretConfig <a name="ServicePrincipalSecretConfig" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_secret

servicePrincipalSecret.ServicePrincipalSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_principal_id: str,
  create_time: str = None,
  expire_time: str = None,
  id: str = None,
  lifetime: str = None,
  secret: str = None,
  secret_hash: str = None,
  status: str = None,
  time_rotating: str = None,
  update_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#service_principal_id ServicePrincipalSecret#service_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.createTime">create_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#create_time ServicePrincipalSecret#create_time}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.expireTime">expire_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#expire_time ServicePrincipalSecret#expire_time}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#id ServicePrincipalSecret#id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.lifetime">lifetime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#lifetime ServicePrincipalSecret#lifetime}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#secret ServicePrincipalSecret#secret}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.secretHash">secret_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#secret_hash ServicePrincipalSecret#secret_hash}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#status ServicePrincipalSecret#status}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.timeRotating">time_rotating</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#time_rotating ServicePrincipalSecret#time_rotating}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.updateTime">update_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#update_time ServicePrincipalSecret#update_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#service_principal_id ServicePrincipalSecret#service_principal_id}.

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#create_time ServicePrincipalSecret#create_time}.

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#expire_time ServicePrincipalSecret#expire_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#id ServicePrincipalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.lifetime"></a>

```python
lifetime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#lifetime ServicePrincipalSecret#lifetime}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.secret"></a>

```python
secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#secret ServicePrincipalSecret#secret}.

---

##### `secret_hash`<sup>Optional</sup> <a name="secret_hash" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.secretHash"></a>

```python
secret_hash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#secret_hash ServicePrincipalSecret#secret_hash}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#status ServicePrincipalSecret#status}.

---

##### `time_rotating`<sup>Optional</sup> <a name="time_rotating" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.timeRotating"></a>

```python
time_rotating: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#time_rotating ServicePrincipalSecret#time_rotating}.

---

##### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#update_time ServicePrincipalSecret#update_time}.

---



