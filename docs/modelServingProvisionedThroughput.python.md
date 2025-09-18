# `modelServingProvisionedThroughput` Submodule <a name="`modelServingProvisionedThroughput` Submodule" id="@cdktf/provider-databricks.modelServingProvisionedThroughput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelServingProvisionedThroughput <a name="ModelServingProvisionedThroughput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput databricks_model_serving_provisioned_throughput}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughput(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: ModelServingProvisionedThroughputConfigA,
  name: str,
  ai_gateway: ModelServingProvisionedThroughputAiGateway = None,
  budget_policy_id: str = None,
  email_notifications: ModelServingProvisionedThroughputEmailNotifications = None,
  id: str = None,
  tags: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputTags]] = None,
  timeouts: ModelServingProvisionedThroughputTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#name ModelServingProvisionedThroughput#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.aiGateway">ai_gateway</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a></code> | ai_gateway block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#budget_policy_id ModelServingProvisionedThroughput#budget_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.emailNotifications">email_notifications</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications">ModelServingProvisionedThroughputEmailNotifications</a></code> | email_notifications block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#id ModelServingProvisionedThroughput#id}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>]]</code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#config ModelServingProvisionedThroughput#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#name ModelServingProvisionedThroughput#name}.

---

##### `ai_gateway`<sup>Optional</sup> <a name="ai_gateway" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.aiGateway"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a>

ai_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#ai_gateway ModelServingProvisionedThroughput#ai_gateway}

---

##### `budget_policy_id`<sup>Optional</sup> <a name="budget_policy_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.budgetPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#budget_policy_id ModelServingProvisionedThroughput#budget_policy_id}.

---

##### `email_notifications`<sup>Optional</sup> <a name="email_notifications" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.emailNotifications"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications">ModelServingProvisionedThroughputEmailNotifications</a>

email_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#email_notifications ModelServingProvisionedThroughput#email_notifications}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#id ModelServingProvisionedThroughput#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#tags ModelServingProvisionedThroughput#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#timeouts ModelServingProvisionedThroughput#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putAiGateway">put_ai_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putEmailNotifications">put_email_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetAiGateway">reset_ai_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetBudgetPolicyId">reset_budget_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetEmailNotifications">reset_email_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ai_gateway` <a name="put_ai_gateway" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putAiGateway"></a>

```python
def put_ai_gateway(
  fallback_config: ModelServingProvisionedThroughputAiGatewayFallbackConfig = None,
  guardrails: ModelServingProvisionedThroughputAiGatewayGuardrails = None,
  inference_table_config: ModelServingProvisionedThroughputAiGatewayInferenceTableConfig = None,
  rate_limits: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputAiGatewayRateLimits]] = None,
  usage_tracking_config: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig = None
) -> None
```

###### `fallback_config`<sup>Optional</sup> <a name="fallback_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putAiGateway.parameter.fallbackConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a>

fallback_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#fallback_config ModelServingProvisionedThroughput#fallback_config}

---

###### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putAiGateway.parameter.guardrails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a>

guardrails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#guardrails ModelServingProvisionedThroughput#guardrails}

---

###### `inference_table_config`<sup>Optional</sup> <a name="inference_table_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putAiGateway.parameter.inferenceTableConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a>

inference_table_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#inference_table_config ModelServingProvisionedThroughput#inference_table_config}

---

###### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putAiGateway.parameter.rateLimits"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>]]

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#rate_limits ModelServingProvisionedThroughput#rate_limits}

---

###### `usage_tracking_config`<sup>Optional</sup> <a name="usage_tracking_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putAiGateway.parameter.usageTrackingConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a>

usage_tracking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#usage_tracking_config ModelServingProvisionedThroughput#usage_tracking_config}

---

##### `put_config` <a name="put_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putConfig"></a>

```python
def put_config(
  served_entities: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputConfigServedEntities]] = None,
  traffic_config: ModelServingProvisionedThroughputConfigTrafficConfig = None
) -> None
```

###### `served_entities`<sup>Optional</sup> <a name="served_entities" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putConfig.parameter.servedEntities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>]]

served_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#served_entities ModelServingProvisionedThroughput#served_entities}

---

###### `traffic_config`<sup>Optional</sup> <a name="traffic_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putConfig.parameter.trafficConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a>

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#traffic_config ModelServingProvisionedThroughput#traffic_config}

---

##### `put_email_notifications` <a name="put_email_notifications" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putEmailNotifications"></a>

```python
def put_email_notifications(
  on_update_failure: typing.List[str] = None,
  on_update_success: typing.List[str] = None
) -> None
```

###### `on_update_failure`<sup>Optional</sup> <a name="on_update_failure" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putEmailNotifications.parameter.onUpdateFailure"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#on_update_failure ModelServingProvisionedThroughput#on_update_failure}.

---

###### `on_update_success`<sup>Optional</sup> <a name="on_update_success" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putEmailNotifications.parameter.onUpdateSuccess"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#on_update_success ModelServingProvisionedThroughput#on_update_success}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#create ModelServingProvisionedThroughput#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#update ModelServingProvisionedThroughput#update}.

---

##### `reset_ai_gateway` <a name="reset_ai_gateway" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetAiGateway"></a>

```python
def reset_ai_gateway() -> None
```

##### `reset_budget_policy_id` <a name="reset_budget_policy_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetBudgetPolicyId"></a>

```python
def reset_budget_policy_id() -> None
```

##### `reset_email_notifications` <a name="reset_email_notifications" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetEmailNotifications"></a>

```python
def reset_email_notifications() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ModelServingProvisionedThroughput resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughput.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughput.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughput.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ModelServingProvisionedThroughput resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ModelServingProvisionedThroughput to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ModelServingProvisionedThroughput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ModelServingProvisionedThroughput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.aiGateway">ai_gateway</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference">ModelServingProvisionedThroughputAiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference">ModelServingProvisionedThroughputConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.emailNotifications">email_notifications</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference">ModelServingProvisionedThroughputEmailNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.servingEndpointId">serving_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList">ModelServingProvisionedThroughputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference">ModelServingProvisionedThroughputTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.aiGatewayInput">ai_gateway_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.budgetPolicyIdInput">budget_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.emailNotificationsInput">email_notifications_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications">ModelServingProvisionedThroughputEmailNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ai_gateway`<sup>Required</sup> <a name="ai_gateway" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.aiGateway"></a>

```python
ai_gateway: ModelServingProvisionedThroughputAiGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference">ModelServingProvisionedThroughputAiGatewayOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.config"></a>

```python
config: ModelServingProvisionedThroughputConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference">ModelServingProvisionedThroughputConfigAOutputReference</a>

---

##### `email_notifications`<sup>Required</sup> <a name="email_notifications" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.emailNotifications"></a>

```python
email_notifications: ModelServingProvisionedThroughputEmailNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference">ModelServingProvisionedThroughputEmailNotificationsOutputReference</a>

---

##### `serving_endpoint_id`<sup>Required</sup> <a name="serving_endpoint_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.servingEndpointId"></a>

```python
serving_endpoint_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.tags"></a>

```python
tags: ModelServingProvisionedThroughputTagsList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList">ModelServingProvisionedThroughputTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.timeouts"></a>

```python
timeouts: ModelServingProvisionedThroughputTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference">ModelServingProvisionedThroughputTimeoutsOutputReference</a>

---

##### `ai_gateway_input`<sup>Optional</sup> <a name="ai_gateway_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.aiGatewayInput"></a>

```python
ai_gateway_input: ModelServingProvisionedThroughputAiGateway
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a>

---

##### `budget_policy_id_input`<sup>Optional</sup> <a name="budget_policy_id_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.budgetPolicyIdInput"></a>

```python
budget_policy_id_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.configInput"></a>

```python
config_input: ModelServingProvisionedThroughputConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a>

---

##### `email_notifications_input`<sup>Optional</sup> <a name="email_notifications_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.emailNotificationsInput"></a>

```python
email_notifications_input: ModelServingProvisionedThroughputEmailNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications">ModelServingProvisionedThroughputEmailNotifications</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ModelServingProvisionedThroughputTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a>]

---

##### `budget_policy_id`<sup>Required</sup> <a name="budget_policy_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughput.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ModelServingProvisionedThroughputAiGateway <a name="ModelServingProvisionedThroughputAiGateway" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway(
  fallback_config: ModelServingProvisionedThroughputAiGatewayFallbackConfig = None,
  guardrails: ModelServingProvisionedThroughputAiGatewayGuardrails = None,
  inference_table_config: ModelServingProvisionedThroughputAiGatewayInferenceTableConfig = None,
  rate_limits: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputAiGatewayRateLimits]] = None,
  usage_tracking_config: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.fallbackConfig">fallback_config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a></code> | fallback_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.guardrails">guardrails</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a></code> | guardrails block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.inferenceTableConfig">inference_table_config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a></code> | inference_table_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.rateLimits">rate_limits</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>]]</code> | rate_limits block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.usageTrackingConfig">usage_tracking_config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a></code> | usage_tracking_config block. |

---

##### `fallback_config`<sup>Optional</sup> <a name="fallback_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.fallbackConfig"></a>

```python
fallback_config: ModelServingProvisionedThroughputAiGatewayFallbackConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a>

fallback_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#fallback_config ModelServingProvisionedThroughput#fallback_config}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.guardrails"></a>

```python
guardrails: ModelServingProvisionedThroughputAiGatewayGuardrails
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a>

guardrails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#guardrails ModelServingProvisionedThroughput#guardrails}

---

##### `inference_table_config`<sup>Optional</sup> <a name="inference_table_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.inferenceTableConfig"></a>

```python
inference_table_config: ModelServingProvisionedThroughputAiGatewayInferenceTableConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a>

inference_table_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#inference_table_config ModelServingProvisionedThroughput#inference_table_config}

---

##### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.rateLimits"></a>

```python
rate_limits: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputAiGatewayRateLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>]]

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#rate_limits ModelServingProvisionedThroughput#rate_limits}

---

##### `usage_tracking_config`<sup>Optional</sup> <a name="usage_tracking_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway.property.usageTrackingConfig"></a>

```python
usage_tracking_config: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a>

usage_tracking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#usage_tracking_config ModelServingProvisionedThroughput#usage_tracking_config}

---

### ModelServingProvisionedThroughputAiGatewayFallbackConfig <a name="ModelServingProvisionedThroughputAiGatewayFallbackConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}.

---

### ModelServingProvisionedThroughputAiGatewayGuardrails <a name="ModelServingProvisionedThroughputAiGatewayGuardrails" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails(
  input: ModelServingProvisionedThroughputAiGatewayGuardrailsInput = None,
  output: ModelServingProvisionedThroughputAiGatewayGuardrailsOutput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails.property.input">input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails.property.output">output</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a></code> | output block. |

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails.property.input"></a>

```python
input: ModelServingProvisionedThroughputAiGatewayGuardrailsInput
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#input ModelServingProvisionedThroughput#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails.property.output"></a>

```python
output: ModelServingProvisionedThroughputAiGatewayGuardrailsOutput
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#output ModelServingProvisionedThroughput#output}

---

### ModelServingProvisionedThroughputAiGatewayGuardrailsInput <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsInput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput(
  invalid_keywords: typing.List[str] = None,
  pii: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii = None,
  safety: typing.Union[bool, IResolvable] = None,
  valid_topics: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.invalidKeywords">invalid_keywords</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#invalid_keywords ModelServingProvisionedThroughput#invalid_keywords}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a></code> | pii block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.safety">safety</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#safety ModelServingProvisionedThroughput#safety}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.validTopics">valid_topics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#valid_topics ModelServingProvisionedThroughput#valid_topics}. |

---

##### `invalid_keywords`<sup>Optional</sup> <a name="invalid_keywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.invalidKeywords"></a>

```python
invalid_keywords: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#invalid_keywords ModelServingProvisionedThroughput#invalid_keywords}.

---

##### `pii`<sup>Optional</sup> <a name="pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.pii"></a>

```python
pii: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a>

pii block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#pii ModelServingProvisionedThroughput#pii}

---

##### `safety`<sup>Optional</sup> <a name="safety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.safety"></a>

```python
safety: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#safety ModelServingProvisionedThroughput#safety}.

---

##### `valid_topics`<sup>Optional</sup> <a name="valid_topics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput.property.validTopics"></a>

```python
valid_topics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#valid_topics ModelServingProvisionedThroughput#valid_topics}.

---

### ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii(
  behavior: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii.property.behavior">behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#behavior ModelServingProvisionedThroughput#behavior}. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#behavior ModelServingProvisionedThroughput#behavior}.

---

### ModelServingProvisionedThroughputAiGatewayGuardrailsOutput <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsOutput" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput(
  invalid_keywords: typing.List[str] = None,
  pii: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii = None,
  safety: typing.Union[bool, IResolvable] = None,
  valid_topics: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.invalidKeywords">invalid_keywords</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#invalid_keywords ModelServingProvisionedThroughput#invalid_keywords}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a></code> | pii block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.safety">safety</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#safety ModelServingProvisionedThroughput#safety}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.validTopics">valid_topics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#valid_topics ModelServingProvisionedThroughput#valid_topics}. |

---

##### `invalid_keywords`<sup>Optional</sup> <a name="invalid_keywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.invalidKeywords"></a>

```python
invalid_keywords: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#invalid_keywords ModelServingProvisionedThroughput#invalid_keywords}.

---

##### `pii`<sup>Optional</sup> <a name="pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.pii"></a>

```python
pii: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a>

pii block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#pii ModelServingProvisionedThroughput#pii}

---

##### `safety`<sup>Optional</sup> <a name="safety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.safety"></a>

```python
safety: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#safety ModelServingProvisionedThroughput#safety}.

---

##### `valid_topics`<sup>Optional</sup> <a name="valid_topics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput.property.validTopics"></a>

```python
valid_topics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#valid_topics ModelServingProvisionedThroughput#valid_topics}.

---

### ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii(
  behavior: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii.property.behavior">behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#behavior ModelServingProvisionedThroughput#behavior}. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#behavior ModelServingProvisionedThroughput#behavior}.

---

### ModelServingProvisionedThroughputAiGatewayInferenceTableConfig <a name="ModelServingProvisionedThroughputAiGatewayInferenceTableConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig(
  catalog_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  schema_name: str = None,
  table_name_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#catalog_name ModelServingProvisionedThroughput#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#schema_name ModelServingProvisionedThroughput#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#table_name_prefix ModelServingProvisionedThroughput#table_name_prefix}. |

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#catalog_name ModelServingProvisionedThroughput#catalog_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#schema_name ModelServingProvisionedThroughput#schema_name}.

---

##### `table_name_prefix`<sup>Optional</sup> <a name="table_name_prefix" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#table_name_prefix ModelServingProvisionedThroughput#table_name_prefix}.

---

### ModelServingProvisionedThroughputAiGatewayRateLimits <a name="ModelServingProvisionedThroughputAiGatewayRateLimits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits(
  renewal_period: str,
  calls: typing.Union[int, float] = None,
  key: str = None,
  principal: str = None,
  tokens: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.renewalPeriod">renewal_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#renewal_period ModelServingProvisionedThroughput#renewal_period}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.calls">calls</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#calls ModelServingProvisionedThroughput#calls}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#key ModelServingProvisionedThroughput#key}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#principal ModelServingProvisionedThroughput#principal}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#tokens ModelServingProvisionedThroughput#tokens}. |

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.renewalPeriod"></a>

```python
renewal_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#renewal_period ModelServingProvisionedThroughput#renewal_period}.

---

##### `calls`<sup>Optional</sup> <a name="calls" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.calls"></a>

```python
calls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#calls ModelServingProvisionedThroughput#calls}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#key ModelServingProvisionedThroughput#key}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#principal ModelServingProvisionedThroughput#principal}.

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#tokens ModelServingProvisionedThroughput#tokens}.

---

### ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig <a name="ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}.

---

### ModelServingProvisionedThroughputConfig <a name="ModelServingProvisionedThroughputConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: ModelServingProvisionedThroughputConfigA,
  name: str,
  ai_gateway: ModelServingProvisionedThroughputAiGateway = None,
  budget_policy_id: str = None,
  email_notifications: ModelServingProvisionedThroughputEmailNotifications = None,
  id: str = None,
  tags: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputTags]] = None,
  timeouts: ModelServingProvisionedThroughputTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#name ModelServingProvisionedThroughput#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.aiGateway">ai_gateway</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a></code> | ai_gateway block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#budget_policy_id ModelServingProvisionedThroughput#budget_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.emailNotifications">email_notifications</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications">ModelServingProvisionedThroughputEmailNotifications</a></code> | email_notifications block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#id ModelServingProvisionedThroughput#id}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>]]</code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.config"></a>

```python
config: ModelServingProvisionedThroughputConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#config ModelServingProvisionedThroughput#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#name ModelServingProvisionedThroughput#name}.

---

##### `ai_gateway`<sup>Optional</sup> <a name="ai_gateway" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.aiGateway"></a>

```python
ai_gateway: ModelServingProvisionedThroughputAiGateway
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a>

ai_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#ai_gateway ModelServingProvisionedThroughput#ai_gateway}

---

##### `budget_policy_id`<sup>Optional</sup> <a name="budget_policy_id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#budget_policy_id ModelServingProvisionedThroughput#budget_policy_id}.

---

##### `email_notifications`<sup>Optional</sup> <a name="email_notifications" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.emailNotifications"></a>

```python
email_notifications: ModelServingProvisionedThroughputEmailNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications">ModelServingProvisionedThroughputEmailNotifications</a>

email_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#email_notifications ModelServingProvisionedThroughput#email_notifications}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#id ModelServingProvisionedThroughput#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#tags ModelServingProvisionedThroughput#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfig.property.timeouts"></a>

```python
timeouts: ModelServingProvisionedThroughputTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#timeouts ModelServingProvisionedThroughput#timeouts}

---

### ModelServingProvisionedThroughputConfigA <a name="ModelServingProvisionedThroughputConfigA" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA(
  served_entities: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputConfigServedEntities]] = None,
  traffic_config: ModelServingProvisionedThroughputConfigTrafficConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA.property.servedEntities">served_entities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>]]</code> | served_entities block. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA.property.trafficConfig">traffic_config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a></code> | traffic_config block. |

---

##### `served_entities`<sup>Optional</sup> <a name="served_entities" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA.property.servedEntities"></a>

```python
served_entities: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputConfigServedEntities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>]]

served_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#served_entities ModelServingProvisionedThroughput#served_entities}

---

##### `traffic_config`<sup>Optional</sup> <a name="traffic_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA.property.trafficConfig"></a>

```python
traffic_config: ModelServingProvisionedThroughputConfigTrafficConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a>

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#traffic_config ModelServingProvisionedThroughput#traffic_config}

---

### ModelServingProvisionedThroughputConfigServedEntities <a name="ModelServingProvisionedThroughputConfigServedEntities" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities(
  entity_name: str,
  entity_version: str,
  provisioned_model_units: typing.Union[int, float],
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.entityName">entity_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#entity_name ModelServingProvisionedThroughput#entity_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.entityVersion">entity_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#entity_version ModelServingProvisionedThroughput#entity_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.provisionedModelUnits">provisioned_model_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#provisioned_model_units ModelServingProvisionedThroughput#provisioned_model_units}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#name ModelServingProvisionedThroughput#name}. |

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#entity_name ModelServingProvisionedThroughput#entity_name}.

---

##### `entity_version`<sup>Required</sup> <a name="entity_version" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.entityVersion"></a>

```python
entity_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#entity_version ModelServingProvisionedThroughput#entity_version}.

---

##### `provisioned_model_units`<sup>Required</sup> <a name="provisioned_model_units" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.provisionedModelUnits"></a>

```python
provisioned_model_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#provisioned_model_units ModelServingProvisionedThroughput#provisioned_model_units}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#name ModelServingProvisionedThroughput#name}.

---

### ModelServingProvisionedThroughputConfigTrafficConfig <a name="ModelServingProvisionedThroughputConfigTrafficConfig" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig(
  routes: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputConfigTrafficConfigRoutes]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig.property.routes">routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>]]</code> | routes block. |

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig.property.routes"></a>

```python
routes: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputConfigTrafficConfigRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>]]

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#routes ModelServingProvisionedThroughput#routes}

---

### ModelServingProvisionedThroughputConfigTrafficConfigRoutes <a name="ModelServingProvisionedThroughputConfigTrafficConfigRoutes" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes(
  traffic_percentage: typing.Union[int, float],
  served_entity_name: str = None,
  served_model_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes.property.trafficPercentage">traffic_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#traffic_percentage ModelServingProvisionedThroughput#traffic_percentage}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes.property.servedEntityName">served_entity_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#served_entity_name ModelServingProvisionedThroughput#served_entity_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes.property.servedModelName">served_model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#served_model_name ModelServingProvisionedThroughput#served_model_name}. |

---

##### `traffic_percentage`<sup>Required</sup> <a name="traffic_percentage" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes.property.trafficPercentage"></a>

```python
traffic_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#traffic_percentage ModelServingProvisionedThroughput#traffic_percentage}.

---

##### `served_entity_name`<sup>Optional</sup> <a name="served_entity_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes.property.servedEntityName"></a>

```python
served_entity_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#served_entity_name ModelServingProvisionedThroughput#served_entity_name}.

---

##### `served_model_name`<sup>Optional</sup> <a name="served_model_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes.property.servedModelName"></a>

```python
served_model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#served_model_name ModelServingProvisionedThroughput#served_model_name}.

---

### ModelServingProvisionedThroughputEmailNotifications <a name="ModelServingProvisionedThroughputEmailNotifications" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications(
  on_update_failure: typing.List[str] = None,
  on_update_success: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications.property.onUpdateFailure">on_update_failure</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#on_update_failure ModelServingProvisionedThroughput#on_update_failure}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications.property.onUpdateSuccess">on_update_success</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#on_update_success ModelServingProvisionedThroughput#on_update_success}. |

---

##### `on_update_failure`<sup>Optional</sup> <a name="on_update_failure" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications.property.onUpdateFailure"></a>

```python
on_update_failure: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#on_update_failure ModelServingProvisionedThroughput#on_update_failure}.

---

##### `on_update_success`<sup>Optional</sup> <a name="on_update_success" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications.property.onUpdateSuccess"></a>

```python
on_update_success: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#on_update_success ModelServingProvisionedThroughput#on_update_success}.

---

### ModelServingProvisionedThroughputTags <a name="ModelServingProvisionedThroughputTags" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#key ModelServingProvisionedThroughput#key}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#value ModelServingProvisionedThroughput#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#key ModelServingProvisionedThroughput#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#value ModelServingProvisionedThroughput#value}.

---

### ModelServingProvisionedThroughputTimeouts <a name="ModelServingProvisionedThroughputTimeouts" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#create ModelServingProvisionedThroughput#create}. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#update ModelServingProvisionedThroughput#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#create ModelServingProvisionedThroughput#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#update ModelServingProvisionedThroughput#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference <a name="ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingProvisionedThroughputAiGatewayFallbackConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a>

---


### ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.putPii">put_pii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetInvalidKeywords">reset_invalid_keywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetPii">reset_pii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetSafety">reset_safety</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetValidTopics">reset_valid_topics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pii` <a name="put_pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.putPii"></a>

```python
def put_pii(
  behavior: str = None
) -> None
```

###### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.putPii.parameter.behavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#behavior ModelServingProvisionedThroughput#behavior}.

---

##### `reset_invalid_keywords` <a name="reset_invalid_keywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetInvalidKeywords"></a>

```python
def reset_invalid_keywords() -> None
```

##### `reset_pii` <a name="reset_pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetPii"></a>

```python
def reset_pii() -> None
```

##### `reset_safety` <a name="reset_safety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetSafety"></a>

```python
def reset_safety() -> None
```

##### `reset_valid_topics` <a name="reset_valid_topics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.resetValidTopics"></a>

```python
def reset_valid_topics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.invalidKeywordsInput">invalid_keywords_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.piiInput">pii_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.safetyInput">safety_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.validTopicsInput">valid_topics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.invalidKeywords">invalid_keywords</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.safety">safety</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.validTopics">valid_topics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pii`<sup>Required</sup> <a name="pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.pii"></a>

```python
pii: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference</a>

---

##### `invalid_keywords_input`<sup>Optional</sup> <a name="invalid_keywords_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.invalidKeywordsInput"></a>

```python
invalid_keywords_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pii_input`<sup>Optional</sup> <a name="pii_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.piiInput"></a>

```python
pii_input: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a>

---

##### `safety_input`<sup>Optional</sup> <a name="safety_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.safetyInput"></a>

```python
safety_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `valid_topics_input`<sup>Optional</sup> <a name="valid_topics_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.validTopicsInput"></a>

```python
valid_topics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `invalid_keywords`<sup>Required</sup> <a name="invalid_keywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.invalidKeywords"></a>

```python
invalid_keywords: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `safety`<sup>Required</sup> <a name="safety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.safety"></a>

```python
safety: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `valid_topics`<sup>Required</sup> <a name="valid_topics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.validTopics"></a>

```python
valid_topics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingProvisionedThroughputAiGatewayGuardrailsInput
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a>

---


### ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.resetBehavior">reset_behavior</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_behavior` <a name="reset_behavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.resetBehavior"></a>

```python
def reset_behavior() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.behaviorInput">behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.behavior">behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `behavior_input`<sup>Optional</sup> <a name="behavior_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.behaviorInput"></a>

```python
behavior_input: str
```

- *Type:* str

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a>

---


### ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.putPii">put_pii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetInvalidKeywords">reset_invalid_keywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetPii">reset_pii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetSafety">reset_safety</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetValidTopics">reset_valid_topics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pii` <a name="put_pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.putPii"></a>

```python
def put_pii(
  behavior: str = None
) -> None
```

###### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.putPii.parameter.behavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#behavior ModelServingProvisionedThroughput#behavior}.

---

##### `reset_invalid_keywords` <a name="reset_invalid_keywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetInvalidKeywords"></a>

```python
def reset_invalid_keywords() -> None
```

##### `reset_pii` <a name="reset_pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetPii"></a>

```python
def reset_pii() -> None
```

##### `reset_safety` <a name="reset_safety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetSafety"></a>

```python
def reset_safety() -> None
```

##### `reset_valid_topics` <a name="reset_valid_topics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.resetValidTopics"></a>

```python
def reset_valid_topics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.invalidKeywordsInput">invalid_keywords_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.piiInput">pii_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.safetyInput">safety_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.validTopicsInput">valid_topics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.invalidKeywords">invalid_keywords</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.safety">safety</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.validTopics">valid_topics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pii`<sup>Required</sup> <a name="pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.pii"></a>

```python
pii: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference</a>

---

##### `invalid_keywords_input`<sup>Optional</sup> <a name="invalid_keywords_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.invalidKeywordsInput"></a>

```python
invalid_keywords_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pii_input`<sup>Optional</sup> <a name="pii_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.piiInput"></a>

```python
pii_input: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a>

---

##### `safety_input`<sup>Optional</sup> <a name="safety_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.safetyInput"></a>

```python
safety_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `valid_topics_input`<sup>Optional</sup> <a name="valid_topics_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.validTopicsInput"></a>

```python
valid_topics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `invalid_keywords`<sup>Required</sup> <a name="invalid_keywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.invalidKeywords"></a>

```python
invalid_keywords: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `safety`<sup>Required</sup> <a name="safety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.safety"></a>

```python
safety: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `valid_topics`<sup>Required</sup> <a name="valid_topics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.validTopics"></a>

```python
valid_topics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingProvisionedThroughputAiGatewayGuardrailsOutput
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a>

---


### ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.resetBehavior">reset_behavior</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_behavior` <a name="reset_behavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.resetBehavior"></a>

```python
def reset_behavior() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.behaviorInput">behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.behavior">behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `behavior_input`<sup>Optional</sup> <a name="behavior_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.behaviorInput"></a>

```python
behavior_input: str
```

- *Type:* str

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a>

---


### ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference <a name="ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putOutput">put_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resetOutput">reset_output</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input` <a name="put_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putInput"></a>

```python
def put_input(
  invalid_keywords: typing.List[str] = None,
  pii: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii = None,
  safety: typing.Union[bool, IResolvable] = None,
  valid_topics: typing.List[str] = None
) -> None
```

###### `invalid_keywords`<sup>Optional</sup> <a name="invalid_keywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putInput.parameter.invalidKeywords"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#invalid_keywords ModelServingProvisionedThroughput#invalid_keywords}.

---

###### `pii`<sup>Optional</sup> <a name="pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putInput.parameter.pii"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii</a>

pii block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#pii ModelServingProvisionedThroughput#pii}

---

###### `safety`<sup>Optional</sup> <a name="safety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putInput.parameter.safety"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#safety ModelServingProvisionedThroughput#safety}.

---

###### `valid_topics`<sup>Optional</sup> <a name="valid_topics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putInput.parameter.validTopics"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#valid_topics ModelServingProvisionedThroughput#valid_topics}.

---

##### `put_output` <a name="put_output" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putOutput"></a>

```python
def put_output(
  invalid_keywords: typing.List[str] = None,
  pii: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii = None,
  safety: typing.Union[bool, IResolvable] = None,
  valid_topics: typing.List[str] = None
) -> None
```

###### `invalid_keywords`<sup>Optional</sup> <a name="invalid_keywords" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putOutput.parameter.invalidKeywords"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#invalid_keywords ModelServingProvisionedThroughput#invalid_keywords}.

---

###### `pii`<sup>Optional</sup> <a name="pii" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putOutput.parameter.pii"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii</a>

pii block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#pii ModelServingProvisionedThroughput#pii}

---

###### `safety`<sup>Optional</sup> <a name="safety" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putOutput.parameter.safety"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#safety ModelServingProvisionedThroughput#safety}.

---

###### `valid_topics`<sup>Optional</sup> <a name="valid_topics" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.putOutput.parameter.validTopics"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#valid_topics ModelServingProvisionedThroughput#valid_topics}.

---

##### `reset_input` <a name="reset_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_output` <a name="reset_output" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.resetOutput"></a>

```python
def reset_output() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.output">output</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.inputInput">input_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.outputInput">output_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.input"></a>

```python
input: ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.output"></a>

```python
output: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference</a>

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.inputInput"></a>

```python
input_input: ModelServingProvisionedThroughputAiGatewayGuardrailsInput
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a>

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.outputInput"></a>

```python
output_input: ModelServingProvisionedThroughputAiGatewayGuardrailsOutput
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingProvisionedThroughputAiGatewayGuardrails
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a>

---


### ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference <a name="ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetTableNamePrefix">reset_table_name_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_table_name_prefix` <a name="reset_table_name_prefix" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.resetTableNamePrefix"></a>

```python
def reset_table_name_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefixInput">table_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_prefix_input`<sup>Optional</sup> <a name="table_name_prefix_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefixInput"></a>

```python
table_name_prefix_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingProvisionedThroughputAiGatewayInferenceTableConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a>

---


### ModelServingProvisionedThroughputAiGatewayOutputReference <a name="ModelServingProvisionedThroughputAiGatewayOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putFallbackConfig">put_fallback_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putGuardrails">put_guardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putInferenceTableConfig">put_inference_table_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putRateLimits">put_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putUsageTrackingConfig">put_usage_tracking_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetFallbackConfig">reset_fallback_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetGuardrails">reset_guardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetInferenceTableConfig">reset_inference_table_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetRateLimits">reset_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetUsageTrackingConfig">reset_usage_tracking_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fallback_config` <a name="put_fallback_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putFallbackConfig"></a>

```python
def put_fallback_config(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putFallbackConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}.

---

##### `put_guardrails` <a name="put_guardrails" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putGuardrails"></a>

```python
def put_guardrails(
  input: ModelServingProvisionedThroughputAiGatewayGuardrailsInput = None,
  output: ModelServingProvisionedThroughputAiGatewayGuardrailsOutput = None
) -> None
```

###### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putGuardrails.parameter.input"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsInput">ModelServingProvisionedThroughputAiGatewayGuardrailsInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#input ModelServingProvisionedThroughput#input}

---

###### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putGuardrails.parameter.output"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutput">ModelServingProvisionedThroughputAiGatewayGuardrailsOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#output ModelServingProvisionedThroughput#output}

---

##### `put_inference_table_config` <a name="put_inference_table_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putInferenceTableConfig"></a>

```python
def put_inference_table_config(
  catalog_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  schema_name: str = None,
  table_name_prefix: str = None
) -> None
```

###### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putInferenceTableConfig.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#catalog_name ModelServingProvisionedThroughput#catalog_name}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putInferenceTableConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}.

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putInferenceTableConfig.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#schema_name ModelServingProvisionedThroughput#schema_name}.

---

###### `table_name_prefix`<sup>Optional</sup> <a name="table_name_prefix" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putInferenceTableConfig.parameter.tableNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#table_name_prefix ModelServingProvisionedThroughput#table_name_prefix}.

---

##### `put_rate_limits` <a name="put_rate_limits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putRateLimits"></a>

```python
def put_rate_limits(
  value: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputAiGatewayRateLimits]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putRateLimits.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>]]

---

##### `put_usage_tracking_config` <a name="put_usage_tracking_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putUsageTrackingConfig"></a>

```python
def put_usage_tracking_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.putUsageTrackingConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}.

---

##### `reset_fallback_config` <a name="reset_fallback_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetFallbackConfig"></a>

```python
def reset_fallback_config() -> None
```

##### `reset_guardrails` <a name="reset_guardrails" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetGuardrails"></a>

```python
def reset_guardrails() -> None
```

##### `reset_inference_table_config` <a name="reset_inference_table_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetInferenceTableConfig"></a>

```python
def reset_inference_table_config() -> None
```

##### `reset_rate_limits` <a name="reset_rate_limits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetRateLimits"></a>

```python
def reset_rate_limits() -> None
```

##### `reset_usage_tracking_config` <a name="reset_usage_tracking_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.resetUsageTrackingConfig"></a>

```python
def reset_usage_tracking_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.fallbackConfig">fallback_config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference">ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.guardrails">guardrails</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.inferenceTableConfig">inference_table_config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference">ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.rateLimits">rate_limits</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList">ModelServingProvisionedThroughputAiGatewayRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.usageTrackingConfig">usage_tracking_config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.fallbackConfigInput">fallback_config_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.guardrailsInput">guardrails_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.inferenceTableConfigInput">inference_table_config_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.rateLimitsInput">rate_limits_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.usageTrackingConfigInput">usage_tracking_config_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fallback_config`<sup>Required</sup> <a name="fallback_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.fallbackConfig"></a>

```python
fallback_config: ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference">ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference</a>

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.guardrails"></a>

```python
guardrails: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference">ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference</a>

---

##### `inference_table_config`<sup>Required</sup> <a name="inference_table_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.inferenceTableConfig"></a>

```python
inference_table_config: ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference">ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference</a>

---

##### `rate_limits`<sup>Required</sup> <a name="rate_limits" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.rateLimits"></a>

```python
rate_limits: ModelServingProvisionedThroughputAiGatewayRateLimitsList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList">ModelServingProvisionedThroughputAiGatewayRateLimitsList</a>

---

##### `usage_tracking_config`<sup>Required</sup> <a name="usage_tracking_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.usageTrackingConfig"></a>

```python
usage_tracking_config: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference</a>

---

##### `fallback_config_input`<sup>Optional</sup> <a name="fallback_config_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.fallbackConfigInput"></a>

```python
fallback_config_input: ModelServingProvisionedThroughputAiGatewayFallbackConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayFallbackConfig">ModelServingProvisionedThroughputAiGatewayFallbackConfig</a>

---

##### `guardrails_input`<sup>Optional</sup> <a name="guardrails_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.guardrailsInput"></a>

```python
guardrails_input: ModelServingProvisionedThroughputAiGatewayGuardrails
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayGuardrails">ModelServingProvisionedThroughputAiGatewayGuardrails</a>

---

##### `inference_table_config_input`<sup>Optional</sup> <a name="inference_table_config_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.inferenceTableConfigInput"></a>

```python
inference_table_config_input: ModelServingProvisionedThroughputAiGatewayInferenceTableConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayInferenceTableConfig">ModelServingProvisionedThroughputAiGatewayInferenceTableConfig</a>

---

##### `rate_limits_input`<sup>Optional</sup> <a name="rate_limits_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.rateLimitsInput"></a>

```python
rate_limits_input: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputAiGatewayRateLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>]]

---

##### `usage_tracking_config_input`<sup>Optional</sup> <a name="usage_tracking_config_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.usageTrackingConfigInput"></a>

```python
usage_tracking_config_input: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingProvisionedThroughputAiGateway
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGateway">ModelServingProvisionedThroughputAiGateway</a>

---


### ModelServingProvisionedThroughputAiGatewayRateLimitsList <a name="ModelServingProvisionedThroughputAiGatewayRateLimitsList" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputAiGatewayRateLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>]]

---


### ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference <a name="ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resetCalls">reset_calls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resetTokens">reset_tokens</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_calls` <a name="reset_calls" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resetCalls"></a>

```python
def reset_calls() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```

##### `reset_tokens` <a name="reset_tokens" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.resetTokens"></a>

```python
def reset_tokens() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.callsInput">calls_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.renewalPeriodInput">renewal_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.tokensInput">tokens_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.calls">calls</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.renewalPeriod">renewal_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `calls_input`<sup>Optional</sup> <a name="calls_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.callsInput"></a>

```python
calls_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `renewal_period_input`<sup>Optional</sup> <a name="renewal_period_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.renewalPeriodInput"></a>

```python
renewal_period_input: str
```

- *Type:* str

---

##### `tokens_input`<sup>Optional</sup> <a name="tokens_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.tokensInput"></a>

```python
tokens_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `calls`<sup>Required</sup> <a name="calls" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.calls"></a>

```python
calls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.renewalPeriod"></a>

```python
renewal_period: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ModelServingProvisionedThroughputAiGatewayRateLimits]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayRateLimits">ModelServingProvisionedThroughputAiGatewayRateLimits</a>]

---


### ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference <a name="ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig">ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig</a>

---


### ModelServingProvisionedThroughputConfigAOutputReference <a name="ModelServingProvisionedThroughputConfigAOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.putServedEntities">put_served_entities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.putTrafficConfig">put_traffic_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resetServedEntities">reset_served_entities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resetTrafficConfig">reset_traffic_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_served_entities` <a name="put_served_entities" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.putServedEntities"></a>

```python
def put_served_entities(
  value: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputConfigServedEntities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.putServedEntities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>]]

---

##### `put_traffic_config` <a name="put_traffic_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.putTrafficConfig"></a>

```python
def put_traffic_config(
  routes: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputConfigTrafficConfigRoutes]] = None
) -> None
```

###### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.putTrafficConfig.parameter.routes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>]]

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving_provisioned_throughput#routes ModelServingProvisionedThroughput#routes}

---

##### `reset_served_entities` <a name="reset_served_entities" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resetServedEntities"></a>

```python
def reset_served_entities() -> None
```

##### `reset_traffic_config` <a name="reset_traffic_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.resetTrafficConfig"></a>

```python
def reset_traffic_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.servedEntities">served_entities</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList">ModelServingProvisionedThroughputConfigServedEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.trafficConfig">traffic_config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference">ModelServingProvisionedThroughputConfigTrafficConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.servedEntitiesInput">served_entities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.trafficConfigInput">traffic_config_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `served_entities`<sup>Required</sup> <a name="served_entities" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.servedEntities"></a>

```python
served_entities: ModelServingProvisionedThroughputConfigServedEntitiesList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList">ModelServingProvisionedThroughputConfigServedEntitiesList</a>

---

##### `traffic_config`<sup>Required</sup> <a name="traffic_config" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.trafficConfig"></a>

```python
traffic_config: ModelServingProvisionedThroughputConfigTrafficConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference">ModelServingProvisionedThroughputConfigTrafficConfigOutputReference</a>

---

##### `served_entities_input`<sup>Optional</sup> <a name="served_entities_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.servedEntitiesInput"></a>

```python
served_entities_input: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputConfigServedEntities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>]]

---

##### `traffic_config_input`<sup>Optional</sup> <a name="traffic_config_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.trafficConfigInput"></a>

```python
traffic_config_input: ModelServingProvisionedThroughputConfigTrafficConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigAOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingProvisionedThroughputConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigA">ModelServingProvisionedThroughputConfigA</a>

---


### ModelServingProvisionedThroughputConfigServedEntitiesList <a name="ModelServingProvisionedThroughputConfigServedEntitiesList" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ModelServingProvisionedThroughputConfigServedEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputConfigServedEntities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>]]

---


### ModelServingProvisionedThroughputConfigServedEntitiesOutputReference <a name="ModelServingProvisionedThroughputConfigServedEntitiesOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityNameInput">entity_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityVersionInput">entity_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.provisionedModelUnitsInput">provisioned_model_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityName">entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityVersion">entity_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.provisionedModelUnits">provisioned_model_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_name_input`<sup>Optional</sup> <a name="entity_name_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityNameInput"></a>

```python
entity_name_input: str
```

- *Type:* str

---

##### `entity_version_input`<sup>Optional</sup> <a name="entity_version_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityVersionInput"></a>

```python
entity_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provisioned_model_units_input`<sup>Optional</sup> <a name="provisioned_model_units_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.provisionedModelUnitsInput"></a>

```python
provisioned_model_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

---

##### `entity_version`<sup>Required</sup> <a name="entity_version" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.entityVersion"></a>

```python
entity_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provisioned_model_units`<sup>Required</sup> <a name="provisioned_model_units" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.provisionedModelUnits"></a>

```python
provisioned_model_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ModelServingProvisionedThroughputConfigServedEntities]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigServedEntities">ModelServingProvisionedThroughputConfigServedEntities</a>]

---


### ModelServingProvisionedThroughputConfigTrafficConfigOutputReference <a name="ModelServingProvisionedThroughputConfigTrafficConfigOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.putRoutes">put_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.resetRoutes">reset_routes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_routes` <a name="put_routes" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.putRoutes"></a>

```python
def put_routes(
  value: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputConfigTrafficConfigRoutes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.putRoutes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>]]

---

##### `reset_routes` <a name="reset_routes" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.resetRoutes"></a>

```python
def reset_routes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList">ModelServingProvisionedThroughputConfigTrafficConfigRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.routesInput">routes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.routes"></a>

```python
routes: ModelServingProvisionedThroughputConfigTrafficConfigRoutesList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList">ModelServingProvisionedThroughputConfigTrafficConfigRoutesList</a>

---

##### `routes_input`<sup>Optional</sup> <a name="routes_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.routesInput"></a>

```python
routes_input: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputConfigTrafficConfigRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingProvisionedThroughputConfigTrafficConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfig">ModelServingProvisionedThroughputConfigTrafficConfig</a>

---


### ModelServingProvisionedThroughputConfigTrafficConfigRoutesList <a name="ModelServingProvisionedThroughputConfigTrafficConfigRoutesList" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputConfigTrafficConfigRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>]]

---


### ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference <a name="ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.resetServedEntityName">reset_served_entity_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.resetServedModelName">reset_served_model_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_served_entity_name` <a name="reset_served_entity_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.resetServedEntityName"></a>

```python
def reset_served_entity_name() -> None
```

##### `reset_served_model_name` <a name="reset_served_model_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.resetServedModelName"></a>

```python
def reset_served_model_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.servedEntityNameInput">served_entity_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput">served_model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput">traffic_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.servedEntityName">served_entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.servedModelName">served_model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.trafficPercentage">traffic_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `served_entity_name_input`<sup>Optional</sup> <a name="served_entity_name_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.servedEntityNameInput"></a>

```python
served_entity_name_input: str
```

- *Type:* str

---

##### `served_model_name_input`<sup>Optional</sup> <a name="served_model_name_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput"></a>

```python
served_model_name_input: str
```

- *Type:* str

---

##### `traffic_percentage_input`<sup>Optional</sup> <a name="traffic_percentage_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput"></a>

```python
traffic_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `served_entity_name`<sup>Required</sup> <a name="served_entity_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.servedEntityName"></a>

```python
served_entity_name: str
```

- *Type:* str

---

##### `served_model_name`<sup>Required</sup> <a name="served_model_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.servedModelName"></a>

```python
served_model_name: str
```

- *Type:* str

---

##### `traffic_percentage`<sup>Required</sup> <a name="traffic_percentage" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.trafficPercentage"></a>

```python
traffic_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ModelServingProvisionedThroughputConfigTrafficConfigRoutes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputConfigTrafficConfigRoutes">ModelServingProvisionedThroughputConfigTrafficConfigRoutes</a>]

---


### ModelServingProvisionedThroughputEmailNotificationsOutputReference <a name="ModelServingProvisionedThroughputEmailNotificationsOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.resetOnUpdateFailure">reset_on_update_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.resetOnUpdateSuccess">reset_on_update_success</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_on_update_failure` <a name="reset_on_update_failure" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.resetOnUpdateFailure"></a>

```python
def reset_on_update_failure() -> None
```

##### `reset_on_update_success` <a name="reset_on_update_success" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.resetOnUpdateSuccess"></a>

```python
def reset_on_update_success() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.onUpdateFailureInput">on_update_failure_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.onUpdateSuccessInput">on_update_success_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.onUpdateFailure">on_update_failure</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.onUpdateSuccess">on_update_success</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications">ModelServingProvisionedThroughputEmailNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_update_failure_input`<sup>Optional</sup> <a name="on_update_failure_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.onUpdateFailureInput"></a>

```python
on_update_failure_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `on_update_success_input`<sup>Optional</sup> <a name="on_update_success_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.onUpdateSuccessInput"></a>

```python
on_update_success_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `on_update_failure`<sup>Required</sup> <a name="on_update_failure" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.onUpdateFailure"></a>

```python
on_update_failure: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `on_update_success`<sup>Required</sup> <a name="on_update_success" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.onUpdateSuccess"></a>

```python
on_update_success: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingProvisionedThroughputEmailNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputEmailNotifications">ModelServingProvisionedThroughputEmailNotifications</a>

---


### ModelServingProvisionedThroughputTagsList <a name="ModelServingProvisionedThroughputTagsList" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ModelServingProvisionedThroughputTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ModelServingProvisionedThroughputTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>]]

---


### ModelServingProvisionedThroughputTagsOutputReference <a name="ModelServingProvisionedThroughputTagsOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ModelServingProvisionedThroughputTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTags">ModelServingProvisionedThroughputTags</a>]

---


### ModelServingProvisionedThroughputTimeoutsOutputReference <a name="ModelServingProvisionedThroughputTimeoutsOutputReference" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving_provisioned_throughput

modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ModelServingProvisionedThroughputTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServingProvisionedThroughput.ModelServingProvisionedThroughputTimeouts">ModelServingProvisionedThroughputTimeouts</a>]

---



