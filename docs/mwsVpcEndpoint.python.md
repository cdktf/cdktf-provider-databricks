# `mwsVpcEndpoint` Submodule <a name="`mwsVpcEndpoint` Submodule" id="@cdktf/provider-databricks.mwsVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsVpcEndpoint <a name="MwsVpcEndpoint" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint databricks_mws_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_vpc_endpoint

mwsVpcEndpoint.MwsVpcEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_vpc_endpoint_id: str,
  region: str,
  vpc_endpoint_name: str,
  account_id: str = None,
  aws_account_id: str = None,
  aws_endpoint_service_id: str = None,
  id: str = None,
  state: str = None,
  use_case: str = None,
  vpc_endpoint_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.awsVpcEndpointId">aws_vpc_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#region MwsVpcEndpoint#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.vpcEndpointName">vpc_endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.awsEndpointServiceId">aws_endpoint_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#id MwsVpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#state MwsVpcEndpoint#state}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.useCase">use_case</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_vpc_endpoint_id`<sup>Required</sup> <a name="aws_vpc_endpoint_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.awsVpcEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#region MwsVpcEndpoint#region}.

---

##### `vpc_endpoint_name`<sup>Required</sup> <a name="vpc_endpoint_name" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.vpcEndpointName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}.

---

##### `aws_endpoint_service_id`<sup>Optional</sup> <a name="aws_endpoint_service_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.awsEndpointServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#id MwsVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#state MwsVpcEndpoint#state}.

---

##### `use_case`<sup>Optional</sup> <a name="use_case" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.useCase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}.

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.vpcEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsEndpointServiceId">reset_aws_endpoint_service_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetUseCase">reset_use_case</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetVpcEndpointId">reset_vpc_endpoint_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_aws_endpoint_service_id` <a name="reset_aws_endpoint_service_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsEndpointServiceId"></a>

```python
def reset_aws_endpoint_service_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_use_case` <a name="reset_use_case" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetUseCase"></a>

```python
def reset_use_case() -> None
```

##### `reset_vpc_endpoint_id` <a name="reset_vpc_endpoint_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetVpcEndpointId"></a>

```python
def reset_vpc_endpoint_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import mws_vpc_endpoint

mwsVpcEndpoint.MwsVpcEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import mws_vpc_endpoint

mwsVpcEndpoint.MwsVpcEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import mws_vpc_endpoint

mwsVpcEndpoint.MwsVpcEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceIdInput">aws_endpoint_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointIdInput">aws_vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCaseInput">use_case_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointIdInput">vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointNameInput">vpc_endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceId">aws_endpoint_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointId">aws_vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCase">use_case</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointName">vpc_endpoint_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `aws_endpoint_service_id_input`<sup>Optional</sup> <a name="aws_endpoint_service_id_input" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceIdInput"></a>

```python
aws_endpoint_service_id_input: str
```

- *Type:* str

---

##### `aws_vpc_endpoint_id_input`<sup>Optional</sup> <a name="aws_vpc_endpoint_id_input" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointIdInput"></a>

```python
aws_vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `use_case_input`<sup>Optional</sup> <a name="use_case_input" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCaseInput"></a>

```python
use_case_input: str
```

- *Type:* str

---

##### `vpc_endpoint_id_input`<sup>Optional</sup> <a name="vpc_endpoint_id_input" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointIdInput"></a>

```python
vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `vpc_endpoint_name_input`<sup>Optional</sup> <a name="vpc_endpoint_name_input" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointNameInput"></a>

```python
vpc_endpoint_name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `aws_endpoint_service_id`<sup>Required</sup> <a name="aws_endpoint_service_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceId"></a>

```python
aws_endpoint_service_id: str
```

- *Type:* str

---

##### `aws_vpc_endpoint_id`<sup>Required</sup> <a name="aws_vpc_endpoint_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointId"></a>

```python
aws_vpc_endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `use_case`<sup>Required</sup> <a name="use_case" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCase"></a>

```python
use_case: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_endpoint_name`<sup>Required</sup> <a name="vpc_endpoint_name" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointName"></a>

```python
vpc_endpoint_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MwsVpcEndpointConfig <a name="MwsVpcEndpointConfig" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_vpc_endpoint

mwsVpcEndpoint.MwsVpcEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_vpc_endpoint_id: str,
  region: str,
  vpc_endpoint_name: str,
  account_id: str = None,
  aws_account_id: str = None,
  aws_endpoint_service_id: str = None,
  id: str = None,
  state: str = None,
  use_case: str = None,
  vpc_endpoint_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsVpcEndpointId">aws_vpc_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#region MwsVpcEndpoint#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointName">vpc_endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsEndpointServiceId">aws_endpoint_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#id MwsVpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#state MwsVpcEndpoint#state}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.useCase">use_case</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_vpc_endpoint_id`<sup>Required</sup> <a name="aws_vpc_endpoint_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsVpcEndpointId"></a>

```python
aws_vpc_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#region MwsVpcEndpoint#region}.

---

##### `vpc_endpoint_name`<sup>Required</sup> <a name="vpc_endpoint_name" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointName"></a>

```python
vpc_endpoint_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}.

---

##### `aws_endpoint_service_id`<sup>Optional</sup> <a name="aws_endpoint_service_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsEndpointServiceId"></a>

```python
aws_endpoint_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#id MwsVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#state MwsVpcEndpoint#state}.

---

##### `use_case`<sup>Optional</sup> <a name="use_case" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.useCase"></a>

```python
use_case: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}.

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}.

---


