# `accountNetworkPolicy` Submodule <a name="`accountNetworkPolicy` Submodule" id="@cdktf/provider-databricks.accountNetworkPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountNetworkPolicy <a name="AccountNetworkPolicy" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy databricks_account_network_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str = None,
  egress: AccountNetworkPolicyEgress = None,
  network_policy_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#account_id AccountNetworkPolicy#account_id}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.egress">egress</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#egress AccountNetworkPolicy#egress}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.networkPolicyId">network_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#network_policy_id AccountNetworkPolicy#network_policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#account_id AccountNetworkPolicy#account_id}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.egress"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#egress AccountNetworkPolicy#egress}.

---

##### `network_policy_id`<sup>Optional</sup> <a name="network_policy_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.networkPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#network_policy_id AccountNetworkPolicy#network_policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.putEgress">put_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetNetworkPolicyId">reset_network_policy_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_egress` <a name="put_egress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.putEgress"></a>

```python
def put_egress(
  network_access: AccountNetworkPolicyEgressNetworkAccess = None
) -> None
```

###### `network_access`<sup>Optional</sup> <a name="network_access" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.putEgress.parameter.networkAccess"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#network_access AccountNetworkPolicy#network_access}.

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_egress` <a name="reset_egress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_network_policy_id` <a name="reset_network_policy_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetNetworkPolicyId"></a>

```python
def reset_network_policy_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccountNetworkPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccountNetworkPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccountNetworkPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccountNetworkPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountNetworkPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference">AccountNetworkPolicyEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.egressInput">egress_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.networkPolicyIdInput">network_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.networkPolicyId">network_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.egress"></a>

```python
egress: AccountNetworkPolicyEgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference">AccountNetworkPolicyEgressOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.egressInput"></a>

```python
egress_input: typing.Union[IResolvable, AccountNetworkPolicyEgress]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a>]

---

##### `network_policy_id_input`<sup>Optional</sup> <a name="network_policy_id_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.networkPolicyIdInput"></a>

```python
network_policy_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `network_policy_id`<sup>Required</sup> <a name="network_policy_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.networkPolicyId"></a>

```python
network_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccountNetworkPolicyConfig <a name="AccountNetworkPolicyConfig" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str = None,
  egress: AccountNetworkPolicyEgress = None,
  network_policy_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#account_id AccountNetworkPolicy#account_id}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#egress AccountNetworkPolicy#egress}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.networkPolicyId">network_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#network_policy_id AccountNetworkPolicy#network_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#account_id AccountNetworkPolicy#account_id}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.egress"></a>

```python
egress: AccountNetworkPolicyEgress
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#egress AccountNetworkPolicy#egress}.

---

##### `network_policy_id`<sup>Optional</sup> <a name="network_policy_id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.networkPolicyId"></a>

```python
network_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#network_policy_id AccountNetworkPolicy#network_policy_id}.

---

### AccountNetworkPolicyEgress <a name="AccountNetworkPolicyEgress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyEgress(
  network_access: AccountNetworkPolicyEgressNetworkAccess = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress.property.networkAccess">network_access</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#network_access AccountNetworkPolicy#network_access}. |

---

##### `network_access`<sup>Optional</sup> <a name="network_access" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress.property.networkAccess"></a>

```python
network_access: AccountNetworkPolicyEgressNetworkAccess
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#network_access AccountNetworkPolicy#network_access}.

---

### AccountNetworkPolicyEgressNetworkAccess <a name="AccountNetworkPolicyEgressNetworkAccess" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess(
  restriction_mode: str,
  allowed_internet_destinations: typing.Union[IResolvable, typing.List[AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations]] = None,
  allowed_storage_destinations: typing.Union[IResolvable, typing.List[AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations]] = None,
  policy_enforcement: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.allowedInternetDestinations">allowed_internet_destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#allowed_internet_destinations AccountNetworkPolicy#allowed_internet_destinations}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.allowedStorageDestinations">allowed_storage_destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#allowed_storage_destinations AccountNetworkPolicy#allowed_storage_destinations}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.policyEnforcement">policy_enforcement</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#policy_enforcement AccountNetworkPolicy#policy_enforcement}. |

---

##### `restriction_mode`<sup>Required</sup> <a name="restriction_mode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}.

---

##### `allowed_internet_destinations`<sup>Optional</sup> <a name="allowed_internet_destinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.allowedInternetDestinations"></a>

```python
allowed_internet_destinations: typing.Union[IResolvable, typing.List[AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#allowed_internet_destinations AccountNetworkPolicy#allowed_internet_destinations}.

---

##### `allowed_storage_destinations`<sup>Optional</sup> <a name="allowed_storage_destinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.allowedStorageDestinations"></a>

```python
allowed_storage_destinations: typing.Union[IResolvable, typing.List[AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#allowed_storage_destinations AccountNetworkPolicy#allowed_storage_destinations}.

---

##### `policy_enforcement`<sup>Optional</sup> <a name="policy_enforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.policyEnforcement"></a>

```python
policy_enforcement: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#policy_enforcement AccountNetworkPolicy#policy_enforcement}.

---

### AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations <a name="AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations(
  destination: str = None,
  internet_destination_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.internetDestinationType">internet_destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#internet_destination_type AccountNetworkPolicy#internet_destination_type}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}.

---

##### `internet_destination_type`<sup>Optional</sup> <a name="internet_destination_type" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.internetDestinationType"></a>

```python
internet_destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#internet_destination_type AccountNetworkPolicy#internet_destination_type}.

---

### AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations <a name="AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations(
  azure_storage_account: str = None,
  azure_storage_service: str = None,
  bucket_name: str = None,
  region: str = None,
  storage_destination_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageAccount">azure_storage_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#azure_storage_account AccountNetworkPolicy#azure_storage_account}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageService">azure_storage_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#azure_storage_service AccountNetworkPolicy#azure_storage_service}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#bucket_name AccountNetworkPolicy#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#region AccountNetworkPolicy#region}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.storageDestinationType">storage_destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#storage_destination_type AccountNetworkPolicy#storage_destination_type}. |

---

##### `azure_storage_account`<sup>Optional</sup> <a name="azure_storage_account" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageAccount"></a>

```python
azure_storage_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#azure_storage_account AccountNetworkPolicy#azure_storage_account}.

---

##### `azure_storage_service`<sup>Optional</sup> <a name="azure_storage_service" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageService"></a>

```python
azure_storage_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#azure_storage_service AccountNetworkPolicy#azure_storage_service}.

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#bucket_name AccountNetworkPolicy#bucket_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#region AccountNetworkPolicy#region}.

---

##### `storage_destination_type`<sup>Optional</sup> <a name="storage_destination_type" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.storageDestinationType"></a>

```python
storage_destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#storage_destination_type AccountNetworkPolicy#storage_destination_type}.

---

### AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement <a name="AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement(
  dry_run_mode_product_filter: typing.List[str] = None,
  enforcement_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.dryRunModeProductFilter">dry_run_mode_product_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#dry_run_mode_product_filter AccountNetworkPolicy#dry_run_mode_product_filter}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#enforcement_mode AccountNetworkPolicy#enforcement_mode}. |

---

##### `dry_run_mode_product_filter`<sup>Optional</sup> <a name="dry_run_mode_product_filter" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.dryRunModeProductFilter"></a>

```python
dry_run_mode_product_filter: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#dry_run_mode_product_filter AccountNetworkPolicy#dry_run_mode_product_filter}.

---

##### `enforcement_mode`<sup>Optional</sup> <a name="enforcement_mode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#enforcement_mode AccountNetworkPolicy#enforcement_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList <a name="AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]]

---


### AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference <a name="AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetInternetDestinationType">reset_internet_destination_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_internet_destination_type` <a name="reset_internet_destination_type" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetInternetDestinationType"></a>

```python
def reset_internet_destination_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationTypeInput">internet_destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationType">internet_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `internet_destination_type_input`<sup>Optional</sup> <a name="internet_destination_type_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationTypeInput"></a>

```python
internet_destination_type_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internet_destination_type`<sup>Required</sup> <a name="internet_destination_type" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationType"></a>

```python
internet_destination_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]

---


### AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList <a name="AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]]

---


### AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference <a name="AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount">reset_azure_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService">reset_azure_storage_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetStorageDestinationType">reset_storage_destination_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_azure_storage_account` <a name="reset_azure_storage_account" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount"></a>

```python
def reset_azure_storage_account() -> None
```

##### `reset_azure_storage_service` <a name="reset_azure_storage_service" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService"></a>

```python
def reset_azure_storage_service() -> None
```

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_storage_destination_type` <a name="reset_storage_destination_type" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetStorageDestinationType"></a>

```python
def reset_storage_destination_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput">azure_storage_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput">azure_storage_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationTypeInput">storage_destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount">azure_storage_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageService">azure_storage_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationType">storage_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_storage_account_input`<sup>Optional</sup> <a name="azure_storage_account_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput"></a>

```python
azure_storage_account_input: str
```

- *Type:* str

---

##### `azure_storage_service_input`<sup>Optional</sup> <a name="azure_storage_service_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput"></a>

```python
azure_storage_service_input: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `storage_destination_type_input`<sup>Optional</sup> <a name="storage_destination_type_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationTypeInput"></a>

```python
storage_destination_type_input: str
```

- *Type:* str

---

##### `azure_storage_account`<sup>Required</sup> <a name="azure_storage_account" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount"></a>

```python
azure_storage_account: str
```

- *Type:* str

---

##### `azure_storage_service`<sup>Required</sup> <a name="azure_storage_service" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageService"></a>

```python
azure_storage_service: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `storage_destination_type`<sup>Required</sup> <a name="storage_destination_type" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationType"></a>

```python
storage_destination_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]

---


### AccountNetworkPolicyEgressNetworkAccessOutputReference <a name="AccountNetworkPolicyEgressNetworkAccessOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedInternetDestinations">put_allowed_internet_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedStorageDestinations">put_allowed_storage_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement">put_policy_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedInternetDestinations">reset_allowed_internet_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedStorageDestinations">reset_allowed_storage_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetPolicyEnforcement">reset_policy_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowed_internet_destinations` <a name="put_allowed_internet_destinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedInternetDestinations"></a>

```python
def put_allowed_internet_destinations(
  value: typing.Union[IResolvable, typing.List[AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedInternetDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]]

---

##### `put_allowed_storage_destinations` <a name="put_allowed_storage_destinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedStorageDestinations"></a>

```python
def put_allowed_storage_destinations(
  value: typing.Union[IResolvable, typing.List[AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedStorageDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]]

---

##### `put_policy_enforcement` <a name="put_policy_enforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement"></a>

```python
def put_policy_enforcement(
  dry_run_mode_product_filter: typing.List[str] = None,
  enforcement_mode: str = None
) -> None
```

###### `dry_run_mode_product_filter`<sup>Optional</sup> <a name="dry_run_mode_product_filter" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement.parameter.dryRunModeProductFilter"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#dry_run_mode_product_filter AccountNetworkPolicy#dry_run_mode_product_filter}.

---

###### `enforcement_mode`<sup>Optional</sup> <a name="enforcement_mode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement.parameter.enforcementMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#enforcement_mode AccountNetworkPolicy#enforcement_mode}.

---

##### `reset_allowed_internet_destinations` <a name="reset_allowed_internet_destinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedInternetDestinations"></a>

```python
def reset_allowed_internet_destinations() -> None
```

##### `reset_allowed_storage_destinations` <a name="reset_allowed_storage_destinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedStorageDestinations"></a>

```python
def reset_allowed_storage_destinations() -> None
```

##### `reset_policy_enforcement` <a name="reset_policy_enforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetPolicyEnforcement"></a>

```python
def reset_policy_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinations">allowed_internet_destinations</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinations">allowed_storage_destinations</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcement">policy_enforcement</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinationsInput">allowed_internet_destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinationsInput">allowed_storage_destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcementInput">policy_enforcement_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionModeInput">restriction_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_internet_destinations`<sup>Required</sup> <a name="allowed_internet_destinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinations"></a>

```python
allowed_internet_destinations: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList</a>

---

##### `allowed_storage_destinations`<sup>Required</sup> <a name="allowed_storage_destinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinations"></a>

```python
allowed_storage_destinations: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList</a>

---

##### `policy_enforcement`<sup>Required</sup> <a name="policy_enforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcement"></a>

```python
policy_enforcement: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference</a>

---

##### `allowed_internet_destinations_input`<sup>Optional</sup> <a name="allowed_internet_destinations_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinationsInput"></a>

```python
allowed_internet_destinations_input: typing.Union[IResolvable, typing.List[AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]]

---

##### `allowed_storage_destinations_input`<sup>Optional</sup> <a name="allowed_storage_destinations_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinationsInput"></a>

```python
allowed_storage_destinations_input: typing.Union[IResolvable, typing.List[AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]]

---

##### `policy_enforcement_input`<sup>Optional</sup> <a name="policy_enforcement_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcementInput"></a>

```python
policy_enforcement_input: typing.Union[IResolvable, AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>]

---

##### `restriction_mode_input`<sup>Optional</sup> <a name="restriction_mode_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionModeInput"></a>

```python
restriction_mode_input: str
```

- *Type:* str

---

##### `restriction_mode`<sup>Required</sup> <a name="restriction_mode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountNetworkPolicyEgressNetworkAccess]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a>]

---


### AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference <a name="AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetDryRunModeProductFilter">reset_dry_run_mode_product_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetEnforcementMode">reset_enforcement_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dry_run_mode_product_filter` <a name="reset_dry_run_mode_product_filter" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetDryRunModeProductFilter"></a>

```python
def reset_dry_run_mode_product_filter() -> None
```

##### `reset_enforcement_mode` <a name="reset_enforcement_mode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetEnforcementMode"></a>

```python
def reset_enforcement_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilterInput">dry_run_mode_product_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementModeInput">enforcement_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilter">dry_run_mode_product_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dry_run_mode_product_filter_input`<sup>Optional</sup> <a name="dry_run_mode_product_filter_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilterInput"></a>

```python
dry_run_mode_product_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enforcement_mode_input`<sup>Optional</sup> <a name="enforcement_mode_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementModeInput"></a>

```python
enforcement_mode_input: str
```

- *Type:* str

---

##### `dry_run_mode_product_filter`<sup>Required</sup> <a name="dry_run_mode_product_filter" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilter"></a>

```python
dry_run_mode_product_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>]

---


### AccountNetworkPolicyEgressOutputReference <a name="AccountNetworkPolicyEgressOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_network_policy

accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.putNetworkAccess">put_network_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resetNetworkAccess">reset_network_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_access` <a name="put_network_access" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.putNetworkAccess"></a>

```python
def put_network_access(
  restriction_mode: str,
  allowed_internet_destinations: typing.Union[IResolvable, typing.List[AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations]] = None,
  allowed_storage_destinations: typing.Union[IResolvable, typing.List[AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations]] = None,
  policy_enforcement: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement = None
) -> None
```

###### `restriction_mode`<sup>Required</sup> <a name="restriction_mode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.putNetworkAccess.parameter.restrictionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}.

---

###### `allowed_internet_destinations`<sup>Optional</sup> <a name="allowed_internet_destinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.putNetworkAccess.parameter.allowedInternetDestinations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#allowed_internet_destinations AccountNetworkPolicy#allowed_internet_destinations}.

---

###### `allowed_storage_destinations`<sup>Optional</sup> <a name="allowed_storage_destinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.putNetworkAccess.parameter.allowedStorageDestinations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#allowed_storage_destinations AccountNetworkPolicy#allowed_storage_destinations}.

---

###### `policy_enforcement`<sup>Optional</sup> <a name="policy_enforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.putNetworkAccess.parameter.policyEnforcement"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/account_network_policy#policy_enforcement AccountNetworkPolicy#policy_enforcement}.

---

##### `reset_network_access` <a name="reset_network_access" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resetNetworkAccess"></a>

```python
def reset_network_access() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.networkAccess">network_access</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference">AccountNetworkPolicyEgressNetworkAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.networkAccessInput">network_access_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_access`<sup>Required</sup> <a name="network_access" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.networkAccess"></a>

```python
network_access: AccountNetworkPolicyEgressNetworkAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference">AccountNetworkPolicyEgressNetworkAccessOutputReference</a>

---

##### `network_access_input`<sup>Optional</sup> <a name="network_access_input" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.networkAccessInput"></a>

```python
network_access_input: typing.Union[IResolvable, AccountNetworkPolicyEgressNetworkAccess]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountNetworkPolicyEgress]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a>]

---



