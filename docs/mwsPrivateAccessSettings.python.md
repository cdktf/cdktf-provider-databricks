# `databricks_mws_private_access_settings`

Refer to the Terraform Registory for docs: [`databricks_mws_private_access_settings`](https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings).

# `mwsPrivateAccessSettings` Submodule <a name="`mwsPrivateAccessSettings` Submodule" id="@cdktf/provider-databricks.mwsPrivateAccessSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsPrivateAccessSettings <a name="MwsPrivateAccessSettings" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings databricks_mws_private_access_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_private_access_settings

mwsPrivateAccessSettings.MwsPrivateAccessSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  private_access_settings_name: str,
  region: str,
  account_id: str = None,
  allowed_vpc_endpoint_ids: typing.List[str] = None,
  id: str = None,
  private_access_level: str = None,
  private_access_settings_id: str = None,
  public_access_enabled: typing.Union[bool, IResolvable] = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.privateAccessSettingsName">private_access_settings_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.allowedVpcEndpointIds">allowed_vpc_endpoint_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.privateAccessLevel">private_access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.privateAccessSettingsId">private_access_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.publicAccessEnabled">public_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#status MwsPrivateAccessSettings#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_access_settings_name`<sup>Required</sup> <a name="private_access_settings_name" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.privateAccessSettingsName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}.

---

##### `allowed_vpc_endpoint_ids`<sup>Optional</sup> <a name="allowed_vpc_endpoint_ids" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.allowedVpcEndpointIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_access_level`<sup>Optional</sup> <a name="private_access_level" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.privateAccessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}.

---

##### `private_access_settings_id`<sup>Optional</sup> <a name="private_access_settings_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.privateAccessSettingsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}.

---

##### `public_access_enabled`<sup>Optional</sup> <a name="public_access_enabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.publicAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#status MwsPrivateAccessSettings#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAllowedVpcEndpointIds">reset_allowed_vpc_endpoint_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessLevel">reset_private_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessSettingsId">reset_private_access_settings_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPublicAccessEnabled">reset_public_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_allowed_vpc_endpoint_ids` <a name="reset_allowed_vpc_endpoint_ids" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAllowedVpcEndpointIds"></a>

```python
def reset_allowed_vpc_endpoint_ids() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_private_access_level` <a name="reset_private_access_level" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessLevel"></a>

```python
def reset_private_access_level() -> None
```

##### `reset_private_access_settings_id` <a name="reset_private_access_settings_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessSettingsId"></a>

```python
def reset_private_access_settings_id() -> None
```

##### `reset_public_access_enabled` <a name="reset_public_access_enabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPublicAccessEnabled"></a>

```python
def reset_public_access_enabled() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import mws_private_access_settings

mwsPrivateAccessSettings.MwsPrivateAccessSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import mws_private_access_settings

mwsPrivateAccessSettings.MwsPrivateAccessSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import mws_private_access_settings

mwsPrivateAccessSettings.MwsPrivateAccessSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIdsInput">allowed_vpc_endpoint_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevelInput">private_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsIdInput">private_access_settings_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsNameInput">private_access_settings_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabledInput">public_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIds">allowed_vpc_endpoint_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevel">private_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsId">private_access_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsName">private_access_settings_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabled">public_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `allowed_vpc_endpoint_ids_input`<sup>Optional</sup> <a name="allowed_vpc_endpoint_ids_input" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIdsInput"></a>

```python
allowed_vpc_endpoint_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_access_level_input`<sup>Optional</sup> <a name="private_access_level_input" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevelInput"></a>

```python
private_access_level_input: str
```

- *Type:* str

---

##### `private_access_settings_id_input`<sup>Optional</sup> <a name="private_access_settings_id_input" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsIdInput"></a>

```python
private_access_settings_id_input: str
```

- *Type:* str

---

##### `private_access_settings_name_input`<sup>Optional</sup> <a name="private_access_settings_name_input" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsNameInput"></a>

```python
private_access_settings_name_input: str
```

- *Type:* str

---

##### `public_access_enabled_input`<sup>Optional</sup> <a name="public_access_enabled_input" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabledInput"></a>

```python
public_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `allowed_vpc_endpoint_ids`<sup>Required</sup> <a name="allowed_vpc_endpoint_ids" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIds"></a>

```python
allowed_vpc_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_access_level`<sup>Required</sup> <a name="private_access_level" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevel"></a>

```python
private_access_level: str
```

- *Type:* str

---

##### `private_access_settings_id`<sup>Required</sup> <a name="private_access_settings_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsId"></a>

```python
private_access_settings_id: str
```

- *Type:* str

---

##### `private_access_settings_name`<sup>Required</sup> <a name="private_access_settings_name" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsName"></a>

```python
private_access_settings_name: str
```

- *Type:* str

---

##### `public_access_enabled`<sup>Required</sup> <a name="public_access_enabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabled"></a>

```python
public_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MwsPrivateAccessSettingsConfig <a name="MwsPrivateAccessSettingsConfig" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_private_access_settings

mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  private_access_settings_name: str,
  region: str,
  account_id: str = None,
  allowed_vpc_endpoint_ids: typing.List[str] = None,
  id: str = None,
  private_access_level: str = None,
  private_access_settings_id: str = None,
  public_access_enabled: typing.Union[bool, IResolvable] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsName">private_access_settings_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.allowedVpcEndpointIds">allowed_vpc_endpoint_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessLevel">private_access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsId">private_access_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.publicAccessEnabled">public_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#status MwsPrivateAccessSettings#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_access_settings_name`<sup>Required</sup> <a name="private_access_settings_name" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsName"></a>

```python
private_access_settings_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}.

---

##### `allowed_vpc_endpoint_ids`<sup>Optional</sup> <a name="allowed_vpc_endpoint_ids" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.allowedVpcEndpointIds"></a>

```python
allowed_vpc_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_access_level`<sup>Optional</sup> <a name="private_access_level" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessLevel"></a>

```python
private_access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}.

---

##### `private_access_settings_id`<sup>Optional</sup> <a name="private_access_settings_id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsId"></a>

```python
private_access_settings_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}.

---

##### `public_access_enabled`<sup>Optional</sup> <a name="public_access_enabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.publicAccessEnabled"></a>

```python
public_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mws_private_access_settings#status MwsPrivateAccessSettings#status}.

---



